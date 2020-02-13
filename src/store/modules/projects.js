import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		projectData: []
	},
	mutations: {
		createJson(state, payload) {}
	},
	getters: {
		projects(state) {
			return state.projectsData;
		}
	},
	actions: {
		create() {},
		read() {},
		update() {},
		delete() {}
	}
})