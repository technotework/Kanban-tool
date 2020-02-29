import common from "@/store/common"
//--------------
//state
//--------------
const state = {
	userData: {},
	contractData: "",
	teamData: "",
	pathData: "",
	isLogin: false
}

//--------------
//mutations
//--------------
const mutations = {
	succsessLogin(state, payload) {

		console.log(payload);
		state.userData = payload;
		state.contractData = payload.contracts[0].uuid;
		state.teamData = payload.contracts[0].teams[0];
		state.pathData = `workspace/${state.contractData}/teams/${state.teamData}/projects/`;
		state.isLogin = true;
	}
}

//--------------
//getters
//--------------
const getters = {
	user(state) {

		//return { uuid: "AzjzROft7NNxQIHgD1YYTVASnnp2" }
		return state.userData;
	},
	contract(state) {
		return state.contractData;
	},
	team(state) {
		return state.teamData;
	},
	path(state) {
		//return "/workspace/C1s25ymrqZUpS0WzqqoU/teams/6snw7RU3yAYjYeHU4p2A/projects/";
		return state.pathData;
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

		return new Promise(async (resolve, reject) => {

			let firebase = rootGetters.firebase;
			let callback = value.callback;

			firebase.auth().signInWithEmailAndPassword(value.id, value.pass)
				.then(
					auth => {

						if (!auth.user.emailVerified) {

							callback();
							dispatch("logOut");

						} else {

							let userUid = auth.user.uid;
							dispatch("getUserInfo", userUid);

						}

					},
					error => {
						throw { type: "FIREBASE_AUTH", error: error.code };
					}
				);
		}, (error) => {
			console.log(error);
		});
	},
	/**
		 * singUp
		 * @param {*} context 
		 * @param {*} idとpass
		 */
	regist({ dispatch, rootGetters }, value) {

		return new Promise(async (resolve, reject) => {

			let firebase = rootGetters.firebase;
			let email = value.id;
			let password = value.pass;
			let callback = value.callback;

			firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(auth => {
					auth.user.sendEmailVerification();
					callback();

					//初期データ作成
					let uid = auth.user.uid;
					let contract = "C1s25ymrqZUpS0WzqqoU";
					let team = "6snw7RU3yAYjYeHU4p2A";
					let userTemplate = common.templates.user(contract, team);

					let object = {
						path: "/users/" + uid,
						content: userTemplate
					}
					common.fb.setDoc(object).catch(reject);

				})
				.catch(error => {
					throw { type: "FIREBASE_AUTH", error: error.code };
				});

		}, (error) => {
			console.log(error);
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