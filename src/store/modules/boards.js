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
			let { boardPath } = getters.info;
			let db = rootGetters.db;
			let collection = db.collection(boardPath);

			let boardData = {
				"board": {
					"id": "",
					"label": "NewBoard",
					"task_sort": []
				}
			};

			collection.add(boardData).then((doc) => {


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
			let { projectId, boardPath } = getters.info;
			let db = rootGetters.db;
			let collection = db.collection(boardPath);

			//読み込み$listen
			collection.onSnapshot(function (querySnapshot) {

				let array = [];
				querySnapshot.forEach(function (doc) {
					let result = doc.data();
					result.board.id = doc.id;
					array.push(result);
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
			let { projectId, boardPath } = getters.info;
			let boardDocPath = boardPath + value.id;
			let taskPath = boardDocPath + "/tasks/";
			let db = rootGetters.db;
			let board = db.doc(boardDocPath);
			let tasks = db.collection(taskPath);

			//TaskDocを消す
			tasks.get().then((querySnapshot) => {

				querySnapshot.forEach((doc) => {

					let taskDocPath = taskPath + doc.id;
					db.doc(taskDocPath).delete();
				});
				//Boardを消す
				//tasks.delete();
				board.delete();
			});

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