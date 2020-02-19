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
	setBoardData(state, payload) {

		state.boardsData = payload.data;
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
	read({ commit, rootGetters }) {
		return new Promise(async (resolve, reject) => {


			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let boardPath = path + "4191PHGlZZ7OWynw4qSO" + "/boards/";
			let collection = db.collection(boardPath);

			collection.onSnapshot(function (querySnapshot) {

				let array = [];
				querySnapshot.forEach(function (doc) {
					let result = doc.data();
					result.board.id = doc.id;
					result.board.task_list = [];

					let taskpath = boardPath + doc.id + "/tasks/"
					let collection = db.collection(taskpath);
					collection.onSnapshot(function (querySnapshot) {

						let tasksArray = [];
						querySnapshot.forEach(function (doc) {
							let result = doc.data();
							tasksArray.push(result);
						})
						result.board.task_list = tasksArray;
					});

					array.push(result);
				});


				commit("setBoardData", { data: array });
			});


		}, (error) => {
			console.log(error);
		});

	},
	update() { },
	delete() { }
}


function getBoard() {

	return new Promise((resolve, reject) => {





	});

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