//--------------
//state
//--------------
const state = {
	projectData: ""
}

//--------------
//mutations
//--------------
const mutations = {

	createJson(state, payload) {
		state.projectData = payload;
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

	create() { },
	read({ commit, rootGetters }) {

		return new Promise((resolve, reject) => {

			let db = rootGetters.db;
			let collection = db.collection("workspace");
			collection.onSnapshot(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					console.log("aa", doc.data());
					commit("createJson", "あ");
					resolve();
					//commit("createJson", doc.data());
				});
			}, function (error) {
				console.log(error);
			});
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