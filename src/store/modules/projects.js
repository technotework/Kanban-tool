import store from "@/store/index"
import common from "@/store/common"
//--------------
//state
//--------------
const state = {
	appInfo: {},
	projectsData: []
}

//--------------
//mutations
//--------------
const mutations = {

	setData(state, payload) {
		state.projectsData = payload;
	},
	setAppInfo(state, payload) {
		state.appInfo = payload;
	}

}

//--------------
//getters
//--------------
const getters = {
	info(state) {
		return state.appInfo;
	},
	projects(state) {
		return state.projectsData;
	}
}

//--------------
//actions
//--------------
const actions = {
	initProjectData({ commit, rootGetters }, value) {

		let path = rootGetters["auth/path"];
		let uuid = rootGetters["auth/user"].uuid;

		let info = {
			uuid: uuid,
			projectPath: path
		}
		commit("setAppInfo", info);
	},
	/**=============================
	 * 新規作成
	 * @param {*} param0 
	 =============================*/
	create({ getters, rootGetters }) {

		return new Promise(async (resolve, reject) => {

			let { uuid, projectPath } = getters.info;
			let date = Math.floor(new Date().getTime() / 1000);
			//Projectドキュメントをを追加します
			let projectDoc = await createProject(projectPath, date, getters.projects);
			//boardsドキュメントを作ります
			let firstBoardID = await createBoards(projectPath, projectDoc);

			//続けてタスクを先頭のボードに追加する
			let boardDocumentPath = projectPath + projectDoc.id + "/boards/" + firstBoardID.id;
			await createTasks(uuid, date, boardDocumentPath);

			resolve();
		});
	},
	/**=============================
	 * 読み込み
	 * @param {*} param0 
	 =============================*/
	read({ commit, rootGetters, getters }) {

		return new Promise((resolve, reject) => {

			let { projectPath } = getters.info;
			let db = rootGetters.db;
			//ProjectをRead&Listen
			let collection = db.collection(projectPath);
			collection.orderBy("project.order").onSnapshot(function (querySnapshot) {

				let array = [];
				//Projectデータ取得してArrayにつめこむ
				querySnapshot.forEach(function (doc) {
					let result = doc.data();
					result.project.id = doc.id;
					array.push(result);
				});
				console.log(array);
				//完了
				commit("setData", array);
			});

		}, (error) => {
			console.log(error);
		});

	},
	/**
	 * プロジェクト名更新
	 * @param {*} param0 
	 * @param {*} value 
	 */
	updateProjectName({ getters }, value) {
		return new Promise(async (resolve, reject) => {

			let { projectPath } = getters.info;
			let name = value.name;
			let object = {
				path: projectPath + value.id,
				content: { project: { "label": name } }
			};
			await common.fb.setDoc(object).catch(reject);
			resolve();

		}, (error) => {
			console.log(error);
		});

	},
	/***=============================
	 * 削除
	 * @param {*} param0 
	 * @param {*} id 
	*============================= */
	delete({ getters }, id) {

		return new Promise(async (resolve, reject) => {

			let { projectPath } = getters.info;

			//パスの設定
			let projectDocPath = projectPath + id;

			//ボード全取得
			let boardsPath = projectDocPath + "/boards/";
			let boardDataArray = await common.fb.get({ path: boardsPath, key: "board" }).catch(reject);

			//ボードにぶらさがっているModuleとtaskの処理
			let i = 0;
			let taskDataArray = [];
			for (i = 0; i < boardDataArray.length; i++) {

				//値の設定
				let boardsID = boardDataArray[i].board.id;
				let boardDocPath = boardsPath + boardsID;
				let tasksPath = boardDocPath + "/tasks/";

				//残存モジュールがあれば消す
				let storeModuleName = "task_" + boardsID;
				let hasModule = store.state.hasOwnProperty(storeModuleName);
				if (hasModule) {
					store.unregisterModule(storeModuleName);
				}
				//taskを読み込む
				taskDataArray = await common.fb.get({ path: tasksPath, key: "task" });

				for (let j = 0; j < taskDataArray.length; j++) {
					//Task削除
					let taskId = taskDataArray[j].task.id;
					let object = { path: tasksPath + taskId };
					await common.fb.deleteDoc(object).catch(reject);
				}
				//Board削除
				let object = { path: boardDocPath };
				await common.fb.deleteDoc(object).catch(reject);
			}
			//project削除
			let object = { path: projectDocPath };
			await common.fb.deleteDoc(object).catch(reject);
			resolve();

		}, (error) => {
			console.log(error);
		});
	},
	/**=========================================================
	 * ドラッグ&ドロップによる更新関連
	/**=========================================================
	 * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
	 * @param {*} param0 
	 * @param {*} value 
	 =============================*/
	dragSortUpdate({ getters }, value) {
		return new Promise(async (resolve, reject) => {

			let { projectPath } = getters.info;
			let projectId = value.id;
			let projectDocPath = projectPath + projectId;
			let order = common.util.getOrder(projectId, getters.projects, "project");
			let object = {
				path: projectDocPath,
				content: { project: { "order": order } }
			};
			common.fb.setDoc(object).catch(reject);

			resolve();

		}, (error) => {
			console.log(error);
		});
	}
}

//-----------------------------------------------
//methods: action.create

/**
 * Projectドキュメントを作成
 * @param {*} db 
 * @param {*} path 
 * @param {*} initialTemplate 
 */
function createProject(path, date, projects) {
	return new Promise(async (resolve, reject) => {

		//順番の初期化
		let order = common.util.getOrder(null, projects, "project");
		//テンプレートの取得
		let initialTemplate = common.templates.project(date, order);
		//作成
		let object = {
			path: path,
			content: initialTemplate
		};
		let data = await common.fb.add(object).catch(reject);
		resolve(data);

	}, (error) => {
		console.log(error);
	});
}

/**
 * BoardDocumentを作成
 * @param {*} path 
 * @param {*} projectDoc 
 * @param {*} db 
 */
function createBoards(path, projectDoc) {
	return new Promise(async (resolve, reject) => {

		//テンプレ取得
		let array = common.templates.initialBoards();
		//作成
		for (let i = 0; i < array.length; i++) {
			let object = {
				path: path + projectDoc.id + "/boards/",
				content: array[i]
			};
			let data = await common.fb.add(object).catch(reject);
			resolve(data);
		}

	}, (error) => {
		console.log(error);
	});
}

/**
 * 初期タスクを作成
 * @param {*} uuid 
 * @param {*} date 
 * @param {*} db 
 * @param {*} boardDocumentPath 
 */
function createTasks(uuid, date, boardDocumentPath) {
	return new Promise(async (resolve, reject) => {

		//テンプレ取得
		let initialTaskTemplate = common.templates.task(uuid, date);
		//作成
		let object = {
			path: boardDocumentPath + "/tasks/",
			content: initialTaskTemplate
		};
		let data = await common.fb.add(object).catch(reject);
		resolve(data);

	}, (error) => {
		console.log(error);
	});
}

//-----------------------------------------------
export {
	state,
	mutations,
	getters,
	actions
}
export default {
	namespaced: true,
	strict: true,
	state,
	mutations,
	getters,
	actions
}

