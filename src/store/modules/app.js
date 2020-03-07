//--------------
//state
//--------------
const state = {
}

//--------------
//mutations
//--------------
const mutations = {

}

//--------------
//getters
//--------------
const getters = {
}

//--------------
//actions
//--------------
const actions = {
	remove({ commit }) {
		commit("auth/remove", null, { root: true });
		commit("boards/remove", null, { root: true });
		commit("members/remove", null, { root: true });
		commit("message/remove", null, { root: true });
		commit("projects/remove", null, { root: true });
		commit("user/remove", null, { root: true });
		commit("team/remove", null, { root: true });
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