//--------------
//state
//--------------
const state = {
	userData: {},
	contractData: "",
	teamData: ""
}

//--------------
//mutations
//--------------
const mutations = {
	succsessLogin(state, payload) {

		state.userData = payload;
		state.contractData = payload.contracts[0].uuid;
		state.teamData = payload.contracts[0].teams[0];
	}
}

//--------------
//getters
//--------------
const getters = {
	user(state) {
		return state.userData;
	},
	contract(state) {
		return state.contractData;
	},
	team(state) {
		return state.teamData;
	}
}

//--------------
//actions
//--------------
const actions = {
	/**
		 * Login
		 * @param {*} context 
		 * @param {*} idとpass
		 */
	login({ dispatch, rootGetters }, value) {

		let firebase = rootGetters.firebase;

		firebase.auth().signInWithEmailAndPassword(value.id, value.pass)
			.then(
				user => {
					console.log(this);
					let userUid = user.user.uid;
					dispatch("getUserInfo", userUid);

				},
				err => {
					alert(err.message)
				}
			);
	},
	/**
	 * getUserInfo
	 * @param {*} context 
	 * @param {*} uid 
	 */
	getUserInfo({ commit, rootGetters }, uid) {

		let db = rootGetters.db;
		let doc = db.doc(`users/${uid}`);
		doc.get().then((doc) => {

			if (doc.exists) {

				let result = doc.data();
				result.uuid = uid;
				commit("succsessLogin", result);
			}

		}).catch((error) => {

			console.log(error);
		})

	},
	/**
	 * Logout
	 * @param {*} context 
	 */
	logout({ rootGetters }) {

		let firebase = rootGetters.firebase;
		firebase.auth().signOut();
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