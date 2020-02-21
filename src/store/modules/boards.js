import store from "@/store/index"
import taskModule from "@/store/modules/tasks"
//--------------
//state
//--------------
const state = {
	appInfo: null,
	boardsData: [],
	projectId: ""
}

//--------------
//mutations
//--------------
const mutations = {
	setAppInfo(state, payload) {
		state.projectId = payload.projectId;
		state.appInfo = payload;
	},
	setBoardsData(state, payload) {
		state.boardsData = payload;
	},
	setProjectId(state, payload) {
		state.projectId = payload;
	}
}

//--------------
//getters
//--------------
const getters = {
	info(state) {
		return state.appInfo;
	},
	boards(state) {
		return state.boardsData;
	},
	projectId(state) {
		return state.projectId;
	}
}

//--------------
//actions
//--------------
const actions = {
	initBoardData({ commit, rootGetters }, value) {

		let info = {
			projectId: value,
			projectDocPath: rootGetters["auth/path"] + value,
			boardPath: rootGetters["auth/path"] + value + "/boards/"
		}
		commit("setAppInfo", info);
	},
	/**========================
	 * ボード作成
	 * @param {*} param0 
	 * @param {*} value 
	 ========================*/
	create({ rootGetters, getters }, value) {

		return new Promise(async (resolve, reject) => {

			//setting
			let { projectDocPath, boardPath } = getters.info;
			let db = rootGetters.db;

			let boardData = {
				"board": {
					"id": "",
					"label": "NewBoard",
					"task_sort": []
				}
			};

			//ボード追加から新規作成されたDocをとってID取得
			let collection = db.collection(boardPath);
			let boardDoc = await collection.add(boardData);

			//親プロジェクトのフィールドのboard_sortの先頭にidを足す
			let docData = await db.doc(projectDocPath).get();
			let obj = docData.data();

			obj.project.boards_sort.unshift(boardDoc.id);

			//反映
			await db.doc(projectDocPath).set({ project: { "boards_sort": obj.project.boards_sort } }, { merge: true })

		}, (error) => {
			console.log(error);
		});
	},
	/**========================
	 * 初期読み込み
	 * @param {*} param0 
	 ========================*/
	read({ commit, rootGetters, getters, state, dispatch }) {
		return new Promise(async (resolve, reject) => {

			//リロード対策 projectモジュールの再読み込み
			if (rootGetters["projects/projects"].length == 0) {
				dispatch("projects/read", null, { root: true });
			}

			//setting
			let { projectDocPath, boardPath } = getters.info;
			let db = rootGetters.db;
			let collection = db.collection(boardPath);

			//読み込み&listen
			collection.onSnapshot(function (querySnapshot) {

				let array = [];
				querySnapshot.forEach(function (doc) {
					let result = doc.data();
					result.board.id = doc.id;
					array.push(result);

					//boardのtask用のstore moduleを生成
					let storeModuleName = "task_" + doc.id;
					let hasModule = store.state.hasOwnProperty(storeModuleName);

					if (!hasModule) {
						store.registerModule(storeModuleName, taskModule);
						store.commit(storeModuleName + "/setParentBoardId", doc.id);
						store.dispatch(storeModuleName + "/setInitialData", doc.id);
						store.dispatch(storeModuleName + "/read", doc.id);
					}
				});

				db.doc(projectDocPath).get().then((doc) => {

					let data = doc.data();
					let boards_sort = data.project.boards_sort;
					array.sort((a, b) => boards_sort.indexOf(a.board.id) - boards_sort.indexOf(b.board.id));
					console.log(array);
					commit("setBoardsData", array);
				});



			});

		}, (error) => {
			console.log(error);
		});

	},

	/**========================
	 * ボード名更新
	 * @param {*} param0 
	 * @param {*} value 
	======================== */
	updateBoardName({ rootGetters, getters }, value) {
		return new Promise((resolve, reject) => {

			//setting
			let { projectId, boardPath } = getters.info;
			let boardDocPath = boardPath + value.id
			let db = rootGetters.db;
			let board = db.doc(boardDocPath);
			let name = value.name;
			//ボード名変更
			board.set({ board: { "label": name } }, { merge: true }).then(() => {
				resolve();
			});

		}, (error) => {
			console.log(error);
		});

	},
	/**========================
	 * ボード削除
	 * @param {*} param0 
	 * @param {*} value 
	 ========================*/
	delete({ rootGetters, getters }, value) {
		return new Promise(async (resolve, reject) => {

			//setting
			let { projectDocPath, boardPath } = getters.info;
			let boardDocId = value.id;
			let boardDocPath = boardPath + boardDocId;
			let taskPath = boardDocPath + "/tasks/";
			let db = rootGetters.db;
			let board = db.doc(boardDocPath);
			let tasks = db.collection(taskPath);

			//TaskDocを消す
			await tasks.get().then((querySnapshot) => {

				querySnapshot.forEach((doc) => {

					let taskDocPath = taskPath + doc.id;
					db.doc(taskDocPath).delete();
				});
				resolve();
			});

			//親プロジェクトのフィールドのboard_sortの配列から消す
			let docData = await db.doc(projectDocPath).get();
			let obj = docData.data();
			let array = obj.project.boards_sort;
			let index = array.indexOf(boardDocId);
			if (index > -1) {
				array.splice(index, 1);
			}
			//反映
			await db.doc(projectDocPath).set({ project: { "boards_sort": array } }, { merge: true })
			//ボード削除
			await board.delete();

			//ボードのtaskのmodule削除
			let storeModuleName = "task_" + boardDocId;
			let hasModule = store.state.hasOwnProperty(storeModuleName);

			if (hasModule) {
				store.unregisterModule(storeModuleName);
			}
			resolve();

		}, (error) => {
			console.log(error);
		});
	}

}
export { state, mutations, getters, actions }

export default {
	namespaced: true,
	strict: true,
	state,
	mutations,
	getters,
	actions
}