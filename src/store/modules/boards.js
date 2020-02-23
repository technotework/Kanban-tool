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

			let order = getOrder(null, getters.boards);

			let boardData = {
				"board": {
					"id": "",
					"order": order,
					"label": "NewBoard",
					"task_sort": []
				}
			};

			//ボード追加から新規作成されたDocをとってID取得
			let collection = db.collection(boardPath);
			await collection.add(boardData).then(() => {
				resolve();
			});

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
			collection.orderBy("board.order").onSnapshot(function (querySnapshot) {

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
				commit("setBoardsData", array);

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
 * @param {*} boardArray 
 */
function getOrder(id, boards) {

	let unit = 10000000;
	let prevOrder, nextOrder, myOrder = null;
	let boardArray = boards;

	//新規
	//新規で自分しかいない
	if (id == null && boardArray.length == 0) {

		myOrder = unit;
	}
	//自分が先頭で後ろにいる
	else if (id == null && boardArray.length > 0) {

		prevOrder = 0;
		nextOrder = boardArray[0].board.order;
	}
	//新規じゃない
	else {

		//indexを特定
		let myIndex;
		for (let i = 0; i < boardArray.length; i++) {

			if (boardArray[i].board.id == id) {

				myIndex = i;
			}
		}
		//前後のindexを特定
		let prev = myIndex - 1;
		let next = myIndex + 1;


		//新規じゃないが自分しかいない
		if (myIndex == 0 && boardArray.length == 1) {

			myOrder = unit;
		}
		//自分が先頭
		else if (myIndex == 0 && boardArray.length > 1) {

			prevOrder = 0;
			nextOrder = boardArray[next].board.order;
		}
		//自分が末端
		else if (myIndex == boardArray.length - 1 && boardArray.length > 1) {

			prevOrder = boardArray[prev].board.order;
			myOrder = prevOrder + unit;
		}
		//自分の前後にいる
		else {
			prevOrder = boardArray[prev].board.order;
			nextOrder = boardArray[next].board.order;
		}

	}

	if (myOrder == null) {
		myOrder = prevOrder + (nextOrder - prevOrder) / 2;
		myOrder = prevOrder + (nextOrder - prevOrder) / 2;
	}
	return myOrder;
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