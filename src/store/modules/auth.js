import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
		userData: {},
		contractData: {}
	},
	mutations: {
		succsessLogin(state, payload) {}
	},
	getters: {
		user(state) {
			return state.userData;
		},
		contract(state) {
			return state.contractData;
		}
	},
	actions: {
		login() {},
		logout() {}
	}
})