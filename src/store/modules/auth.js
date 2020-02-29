//--------------
//state
//--------------
const state = {
	userData: {},
	contractData: "",
	teamData: "",
	pathData: ""
}

//--------------
//mutations
//--------------
const mutations = {
	succsessLogin(state, payload) {

		state.userData = payload;
		state.contractData = payload.contracts[0].uuid;
		state.teamData = payload.contracts[0].teams[0];
		state.pathData = `workspace/${state.contractData}/teams/${state.teamData}/projects/`
	}
}

//--------------
//getters
//--------------
const getters = {
	user(state) {

		return { uuid: "AzjzROft7NNxQIHgD1YYTVASnnp2" }
		//return state.userData;
	},
	contract(state) {
		return state.contractData;
	},
	team(state) {
		return state.teamData;
	},
	path(state) {
		return "/workspaces	/C1s25ymrqZUpS0WzqqoU/teams/6snw7RU3yAYjYeHU4p2A/projects/";
		//return state.pathData;
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

					let userUid = user.user.uid;
					dispatch("getUserInfo", userUid);

				},
				error => {
					throw { type: "FIREBASE_AUTH", error: error.code };
				}
			);
	},
	/**
		 * singUp
		 * @param {*} context 
		 * @param {*} idとpass
		 */
	regist({ dispatch, rootGetters }, value) {

		let firebase = rootGetters.firebase;
		let email = value.id;
		let password = value.pass;
		let callback = value.callback;

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(auth => {
				auth.user.sendEmailVerification();
			})
			.then(() => {
				callback();
			})
			.catch(error => {
				throw { type: "FIREBASE_AUTH", error: error.code };
			});
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
		firebase.auth().signOut().catch(error => {
			throw { type: "FIREBASE_AUTH", error: error.code };
		});
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