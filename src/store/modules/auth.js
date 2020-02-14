import Firebase from "@/firebase"
Firebase.init();
let firebase = Firebase.firebase;
let db = Firebase.db();

export default {
	namespaced: true,
	strict: true,
	state: {
		userData: {},
		contractData: "",
		teamData: ""
	},
	mutations: {
		succsessLogin(state, payload) {

			state.userData = payload;
			state.contractData = payload.contracts[0].uuid;
			state.teamData = payload.contracts[0].teams[0];
		}
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
		/**
		 * Login
		 * @param {*} context 
		 * @param {*} idとpass
		 */
		login({ dispatch }, value) {

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
		getUserInfo({ commit }, uid) {
			console.log(`users/${uid}`);
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
		logout(context) {
			firebase.auth().signOut();
		}
	}
}