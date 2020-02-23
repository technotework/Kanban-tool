import store from "@/store/index"
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
const actions = {
	initProjectData({ commit, rootGetters }, value) {

		let info = {
			uuid: rootGetters["auth/user"].uuid,
			authPath: rootGetters["auth/path"],
		}
		commit("setAppInfo", info);
	},
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
			console.log(name, id);
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

					//残存モジュールがあれば消す
					let storeModuleName = "task_" + boardsID;
					let hasModule = store.state.hasOwnProperty(storeModuleName);
					if (hasModule) {
						store.unregisterModule(storeModuleName);
					}

					//boardDoc
					let boardDocPath = projectDocPath + "/boards/" + boardsID;
					let boardDoc = db.doc(boardDocPath);

					//TaskCollection
					let tasksPath = boardDocPath + "/tasks/";
					let tasks = db.collection(tasksPath);

					tasks.get().then((querySnapshot) => {

						querySnapshot.forEach((doc) => {

							//TaskCollection削除
							let taskDocPath = tasksPath + doc.id;
							let taskDoc = db.doc(taskDocPath);
							taskDoc.delete();

						});
					});
					//BoardDoc削除
					boardDoc.delete();

				});

			}).then(() => {

				//Project削除
				projectDoc.delete();
				resolve();
			});

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
	dragSortUpdate({ rootGetters, getters }, value) {
		return new Promise(async (resolve, reject) => {

			let { boardPath } = getters.info;

			let boardId = value.id;
			let boardDocPath = boardPath + boardId;

			let order = getOrder(boardId, getters.boards);

			let db = rootGetters.db;
			db.doc(boardDocPath).set({ board: { "order": order } }, { merge: true }).then(() => {
				resolve();
			});


		}, (error) => {
			console.log(error);
		});
	}
}


/**
 * 自分のorderを算出
 * @param {*} id 
 * @param {*} projectArray 
 */
function getOrder(id, projects) {

	let unit = 10000000;
	let prevOrder, nextOrder, myOrder = null;
	let projectArray = projects;

	//新規
	//新規で自分しかいない
	if (id == null && projectArray.length == 0) {

		myOrder = unit;
	}
	//自分が先頭で後ろにいる
	else if (id == null && projectArray.length > 0) {

		prevOrder = 0;
		nextOrder = projectArray[0].project.order;
	}
	//新規じゃない
	else {

		//indexを特定
		let myIndex;
		for (let i = 0; i < projectArray.length; i++) {

			if (projectArray[i].project.id == id) {

				myIndex = i;
			}
		}
		//前後のindexを特定
		let prev = myIndex - 1;
		let next = myIndex + 1;


		//新規じゃないが自分しかいない
		if (myIndex == 0 && projectArray.length == 1) {

			myOrder = unit;
		}
		//自分が先頭
		else if (myIndex == 0 && projectArray.length > 1) {

			prevOrder = 0;
			nextOrder = projectArray[next].project.order;
		}
		//自分が末端
		else if (myIndex == projectArray.length - 1 && projectArray.length > 1) {

			prevOrder = projectArray[prev].project.order;
			myOrder = prevOrder + unit;
		}
		//自分の前後にいる
		else {
			prevOrder = projectArray[prev].project.order;
			nextOrder = projectArray[next].project.order;
		}

	}

	if (myOrder == null) {
		myOrder = prevOrder + (nextOrder - prevOrder) / 2;
		myOrder = prevOrder + (nextOrder - prevOrder) / 2;
	}
	return myOrder;
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

		let order;

		let initialTemplate = {
			"project": {
				"id": "",
				"order": order,
				"label": "Project",
				"update_date": `${date}`
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
				"label": "Backlog",
				"order": 10000000
			}
		},
		{
			"board": {
				"id": "",
				"label": "ToDo",
				"order": 20000000
			}
		},
		{
			"board": {
				"id": "",
				"label": "Progress",
				"order": 30000000
			}
		},
		{
			"board": {
				"id": "",
				"label": "Complete",
				"order": 40000000
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
				"order": 10000000,
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

