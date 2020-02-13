import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		boardsData: []
	},
	mutations: {
		createJson(state, payload) {}
	},
	getters: {
		boards(state) {
			return state.boardsData;
		},
	},
	actions: {
		create() {},
		read() {},
		update() {},
		delete() {}
	}
})