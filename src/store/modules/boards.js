//--------------
//state
//--------------
const state = {
	boardsData: [],
	projectId: ""
}

//--------------
//mutations
//--------------
const mutations = {
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
	create() { },
	/**
	 * 初期読み込み
	 * @param {*} param0 
	 */
	read({ commit, rootGetters, state }) {
		return new Promise(async (resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let projectId = state.projectId;
			let boardPath = path + projectId + "/boards/";
			let collection = db.collection(boardPath);

			collection.onSnapshot(function (querySnapshot) {

				let array = [];
				querySnapshot.forEach(function (doc) {
					let result = doc.data();
					result.board.id = doc.id;
					array.push(result);
				});
				commit("setBoardsData", array);
			});

			/*
			
				
			*/

		}, (error) => {
			console.log(error);
		});

	},

	/**
	 * ボード名更新
	 * @param {*} param0 
	 * @param {*} value 
	 */
	updateBoardName({ rootGetters }, value) {
		return new Promise((resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let name = value.name;
			let projectId = state.projectId;
			let id = value.id;

			let board = db.doc(path + projectId + "/boards/" + id);

			//実行
			board.set({ board: { "label": name } }, { merge: true }).then(() => {
				resolve();
			});

		}, (error) => {
			console.log(error);
		});

	},
	delete() { }
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