//--------------
//state
//--------------
const state = {
	projectsData: []
}

//--------------
//mutations
//--------------
const mutations = {

	setData(state, payload) {
		state.projectsData = payload;
	},
	setName(state, payload) {


	}

}

//--------------
//getters
//--------------
const getters = {

	projects(state) {
		return state.projectsData;
	}
}

//--------------
//actions
//--------------
const uuidv4 = require('uuid/v4');
const actions = {

	/**=============================
	 * 新規作成
	 * @param {*} param0 
	 =============================*/
	create({ rootGetters }) {

		return new Promise(async (resolve, reject) => {

			let uuid = rootGetters["auth/user"].uuid;
			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let date = Math.floor(new Date().getTime() / 1000);

			//Projectドキュメントをを追加します
			let projectDoc = await createProject(db, path, date);
			//boardsドキュメントを作ります
			let firstBoardID = await createBoards(path, projectDoc, db);

			//続けてタスクを先頭のボードに追加する
			let boardDocumentPath = path + projectDoc.id + "/boards/" + firstBoardID;
			await createTasks(uuid, date, db, boardDocumentPath);

			resolve();
		});
	},
	/**=============================
	 * 読み込み
	 * @param {*} param0 
	 =============================*/
	read({ commit, rootGetters }) {

		return new Promise((resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let collection = db.collection(path);

			collection.onSnapshot(function (querySnapshot) {

				let array = [];
				querySnapshot.forEach(function (doc) {

					let result = doc.data();
					result.project.id = doc.id;
					array.push(result);
				})

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
	updateProjectName({ rootGetters }, value) {
		return new Promise((resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let name = value.name;
			let id = value.id;

			let parentProject = db.doc(path + id);
			//実行
			parentProject.set({ project: { "label": name } }, { merge: true }).then(() => {
				resolve();
			});

		}, (error) => {
			console.log(error);
		});

	},
	/***=============================
	 * 削除
	 * @param {*} param0 
	 * @param {*} id 
	*============================= */
	delete({ rootGetters }, id) {

		return new Promise(async (resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];

			let projectDocPath = path + id;
			let projectDoc = db.doc(projectDocPath);

			let boards = db.collection(projectDocPath + "/boards/");

			boards.get().then((querySnapshot) => {

				querySnapshot.forEach((doc) => {

					let boardsID = doc.id;

					let boardDocPath = projectDocPath + "/boards/" + boardsID;
					let boardDoc = db.doc(boardDocPath);


					let tasksPath = boardDocPath + "/tasks/";
					let tasks = db.collection(tasksPath);

					tasks.get().then((querySnapshot) => {

						querySnapshot.forEach((doc) => {

							let taskDocPath = tasksPath + doc.id;
							let taskDoc = db.doc(taskDocPath);
							taskDoc.delete();

						});
					});

					boardDoc.delete();
					resolve();
				});

			}).then(() => {
				//boards.delete();
				projectDoc.delete();
				resolve();
			});

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
function createProject(db, path, date) {

	return new Promise((resolve, reject) => {

		let initialTemplate = {
			"project": {
				"id": "",
				"label": "Project",
				"update_date": `${date}`,
				"boards_sort": []
			}
		};
		let collection = db.collection(path);
		collection.add(initialTemplate).then((doc) => {
			resolve(doc);
		})
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
function createBoards(path, projectDoc, db) {
	return new Promise(async (resolve, reject) => {

		let initialBoardsTemplate = [{
			"board": {
				"id": "",
				"title": "Backlog",
				"task_sort": []
			}
		},
		{
			"board": {
				"id": "",
				"title": "ToDo",
				"task_sort": []
			}
		},
		{
			"board": {
				"id": "",
				"title": "Progress",
				"task_sort": []
			}
		},
		{
			"board": {
				"id": "",
				"title": "Complete",
				"task_sort": []
			}
		}
		];

		let dataPath = path + projectDoc.id + "/boards/";
		let collection = db.collection(dataPath);
		let array = initialBoardsTemplate;
		let orderArray = [];
		//実行
		for (let i = 0; i < array.length; i++) {
			await collection.add(array[i]).then((doc) => {
				//ボードの順番をIDの配列としてフィールドに追加
				orderArray.push(doc.id);
			});
		}

		let parentProject = db.doc(path + projectDoc.id);
		//実行
		await parentProject.set({ project: { "boards_sort": orderArray } }, { merge: true });

		resolve(orderArray[0]);

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
function createTasks(uuid, date, db, boardDocumentPath) {
	return new Promise(async (resolve, reject) => {
		let initialTaskTemplate = {
			task: {
				"id": "",
				"data": "",
				"labels": [],
				"members": [],
				"createUser": `${uuid}`,
				"create_date": `${date}`,
				"start_date": null,
				"end_date": null,
				"archive_date": null,
				"comments": []
			}
		};
		let dataPath = boardDocumentPath + "/tasks/";
		let collection = db.collection(dataPath);
		let taskDoc = await collection.add(initialTaskTemplate);
		//タスクの順番をIDの配列としてフィールドに追加
		dataPath = boardDocumentPath;
		let parentProject = db.doc(dataPath);
		await parentProject.set({ board: { "task_sort": [taskDoc.id] } }, { merge: true });

		resolve();

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

