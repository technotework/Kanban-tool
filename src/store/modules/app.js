export default {
	strict: true,
	namespaced: true,
	state: {
		user: {},
		loginStatus: false
	},
	mutations: {
		onAuthStateChanged(state, user) {
			//ユーザー情報
			state.user = user;
		},
		onUserStatusChanged(state, loginStatus) {
			//ログイン状態かどうか
			state.loginStatus = loginStatus;
		}
	},
	getters: {
		user(state) {
			return state.user;
		},
		isSignedIn(state) {
			return state.loginStatus;
		}
	},
	actions: {},
	modules: {}
}