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
	actions: {
		create() { },
		read() { },
		update() { },
		delete() { }
	}
}