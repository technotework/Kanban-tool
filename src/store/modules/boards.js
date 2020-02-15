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
	createJson(state, payload) { }
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
	read() { },
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