//--------------
//state
//--------------
const state = {
	boardsData: []
}

//--------------
//mutations
//--------------
const mutations = {
	setData(state, payload) {

		state.boardsData = payload;
	}
}

//--------------
//getters
//--------------
const getters = {
	boards(state) {
		return state.boardsData;
	},
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
	read({ commit, rootGetters }, projectId) {

		let db = rootGetters.db;
		let path = rootGetters["auth/path"];
		let boardPath = path + projectId + "/boards/";
		let collection = db.collection(boardPath);

		collection.onSnapshot(function (querySnapshot) {

			let array = [];
			//フィールド取得
			querySnapshot.forEach(function (doc) {

				let result = doc.data();
				result.board.id = doc.id;
				result.board.task_list = [];

				//task取得
				let taskPath = boardPath + doc.id + "/tasks/";
				let collection = db.collection(taskPath);
				collection.onSnapshot(function (querySnapshot) {
					querySnapshot.forEach(function (doc) {
						let taskData = doc.data();
						result.board.task_list.push(taskData);
					});
				});

				array.push(result);
			})
			console.log(array);
			commit("setData", array);

		}, (error) => {
			console.log(error);
		});
	},
	update() { },
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