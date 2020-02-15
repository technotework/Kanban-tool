import actions from "./actions"
import mutations from "./mutations"
import state from "./state"

export default {
	namespaced: true,
	strict: true,
	state,
	mutations,
	getters: {
		projects(state) {
			return state.projectsData;
		}

	},
	actions
}