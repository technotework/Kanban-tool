import actions from "./actions"

export default {
	namespaced: true,
	strict: true,
	state: {
		projectData: []
	},
	mutations: {
		createJson(state, payload) { }
	},
	getters: {
		projects(state) {
			return state.projectsData;
		}

	},
	actions
}