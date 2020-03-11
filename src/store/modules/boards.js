import store from "@/store/index"
import { fn } from "@/store/index"
import taskModule from "@/store/modules/tasks"
import common from "@/store/common"
//--------------
//state
//--------------
const state = {
	appInfo: null,
	boardsData: [],
	projectId: "",
	unsnapshots: [],
	lastUpdateDate: null
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
	},
	setUnsnap(state, payload) {
		state.unsnapshots.push(payload);
	},
	setUpdateDate(state, payload) {
		let date = Math.floor(new Date().getTime() / 1000);
		state.lastUpdateDate = date;
	},
	remove(state) {
		for (let i = 0; i < state.unsnapshots.length; i++) {
			state.unsnapshots[i]();
		}
		state.unsnapshots = [];
		state.appInfo = null;
		state.boardsData = [];
		state.lastUpdateDate = null;
		state.projectId = "";
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
	},
	updateDate(state) {
		return state.lastUpdateDate;
	}
}

//--------------
//actions
//--------------
const actions = {
	initBoardData({ commit, dispatch, rootGetters }, value) {

		return new Promise(async (resolve, reject) => {

			let info = {
				projectId: value,
				projectDocPath: rootGetters["auth/path"] + value,
				boardPath: rootGetters["auth/path"] + value + "/boards/"
			}
			commit("setAppInfo", info);

		}, (error) => {
			//console.log(error);
		});
	},
	/**========================
	 * ボード作成
	 * @param {*} param0 
	 * @param {*} value 
	 ========================*/
	create({ commit, getters }, value) {

		return new Promise(async (resolve, reject) => {
			//setting
			let { boardPath } = getters.info;
			let order = common.util.getOrder(null, getters.boards, "board");
			let boardTemplate = common.templates.board(order);

			let object = {
				path: boardPath,
				content: boardTemplate
			};
			await common.fb.add(object).catch(reject);
			commit("setUpdateDate");
			resolve();

		}, (error) => {
			//console.log(error);
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
			let unsnap = collection.orderBy("board.order").onSnapshot(function (querySnapshot) {

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

			commit("setUnsnap", unsnap);

		}, (error) => {
			//console.log(error);
		});

	},

	/**========================
	 * ボード名更新
	 * @param {*} param0 
	 * @param {*} value 
	======================== */
	updateBoardName({ commit, getters }, value) {
		return new Promise((resolve, reject) => {

			//setting
			let { boardPath } = getters.info;
			let boardDocPath = boardPath + value.id

			let object = {
				path: boardDocPath,
				content: { board: { "label": value.name } }
			};
			common.fb.setDoc(object).catch(reject);
			commit("setUpdateDate");
		}, (error) => {
			//console.log(error);
		});

	},
	/**========================
	 * ボード削除
	 * @param {*} param0 
	 * @param {*} value 
	 ========================*/
	delete({ commit, getters }, value) {
		return new Promise(async (resolve, reject) => {

			//setting
			let { boardPath } = getters.info;
			let boardDocId = value;
			let boardDocPath = boardPath + boardDocId;
			let taskPath = boardDocPath + "/tasks/";

			let object = {
				path: taskPath,
				key: "task"
			};
			let taskDataArray = await common.fb.get(object).catch(reject);

			for (let i = 0; i < taskDataArray.length; i++) {

				let taskDocPath = taskPath + taskDataArray[i].task.id;

				common.fb.deleteDoc({ path: taskDocPath }).catch(reject);
			}

			common.fb.deleteDoc({ path: boardDocPath }).catch(reject);
			commit("setUpdateDate");
			resolve();

		}, (error) => {
			//console.log(error);
		});
	},
	/**
	 * Backやブラウザを閉じて離脱後の後処理をFirebase Functionsに投げる
	 * @param {*} param0 
	 */
	postProcess({ rootGetters, getters }) {
		return new Promise(async (resolve, reject) => {

			let resultStr = "";
			//編集中のtaskを収集
			for (const key in rootGetters) {
				let getter = key.match(/task_.*editingDocPaths/);
				if (getter != null) {
					let sep = "";
					if (resultStr != "") {
						sep = ",";
					}
					if (rootGetters[getter].length > 0) {
						resultStr += sep + rootGetters[getter].join(",");
					}
				}
			}

			let pathArray = [];
			if (resultStr != "") {
				pathArray = resultStr.split(",");
			}
			let projectDoc = getters.info.projectDocPath;
			let updateDate = getters.updateDate;
			console.log(pathArray);
			fn.httpsCallable('postProcess')({
				taskDocPaths: pathArray,
				projectDocPath: projectDoc,
				date: updateDate
			});




		}, (error) => {
			//console.log(error);
		});
	},
	/**=========================================================
	 * ドラッグ&ドロップによる更新関連
	/**=========================================================
	 * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
	 * @param {*} param0 
	 * @param {*} value 
	 =============================*/
	dragSortUpdate({ commit, getters }, value) {
		return new Promise(async (resolve, reject) => {

			let { boardPath } = getters.info;

			let boardId = value.id;
			let boardDocPath = boardPath + boardId;
			let order = common.util.getOrder(boardId, getters.boards, "board");

			let object = {
				path: boardDocPath,
				content: { board: { "order": order } }
			};
			await common.fb.setDoc(object).catch(reject);
			commit("setUpdateDate");
			resolve();

		}, (error) => {
			//console.log(error);
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