export default {
	namespaced: true,
	strict: true,
	state: {
		boardsData: []
	},
	mutations: {
		createJson(state, payload) { }
	},
	getters: {
		boards(state) {
			return state.boardsData;
		},
	},
	actions: {
		create() { },
		read() { },
		update() { },
		delete() { }
	}
}