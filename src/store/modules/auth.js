import common from "@/store/common"
import { TYPE, APP } from "@/containers/resorces/message"
import router from "@/router/"
import { v4 as uuidv4 } from "uuid";
//--------------
//state
//--------------
const state = {
	userData: {},
	contractData: "",
	teamData: "",
	pathData: "",
	isLogin: false,
	imgData: null
}

//--------------
//mutations
//--------------
const mutations = {
	succsessLogin(state, payload) {

		state.userData = payload;
		//DEMOのため現状契約IDとチームIDは固定にしておく
		state.contractData = "C1s25ymrqZUpS0WzqqoU";
		state.teamData = payload.contracts.C1s25ymrqZUpS0WzqqoU[0];
		state.pathData = `workspace/${state.contractData}/teams/${state.teamData}/projects/`;
		state.isLogin = true;
	},
	remove(state, payload) {
		state.userData = null;
		state.contractData = null;
		state.teamData = null;
		state.pathData = null;
		state.isLogin = false;
		state.imgData = null;
	},
	setImage(state, payload) {
		state.imgData = payload;
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
	},
	path(state) {
		return state.pathData;
	},
	isLogin(state) {
		return state.isLogin;
	},
	icon(state) {
		return state.imgData;
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
							dispatch("logout");

						} else {

							let uid = auth.user.uid;
							let path = "/projects";
							dispatch("setUserInfo", { uid: uid, path: path });

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
					let altId = uuidv4();
					let contract = "C1s25ymrqZUpS0WzqqoU";
					let team = "6snw7RU3yAYjYeHU4p2A";
					let userTemplate = common.templates.user(contract, team, altId);

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
	 * setUserInfo
	 * @param {*} context 
	 * @param {*} uid 
	 */
	setUserInfo({ commit, rootGetters, dispatch }, obj) {

		return new Promise(async (resolve, reject) => {

			let { uid, path } = obj

			//取得を別モジュールに依頼
			await dispatch("user/getUserInfo", obj, { root: true });

			//格納
			let result = rootGetters["user/userData"];

			result.uuid = uid;
			result.path = result.altId + "/icon";
			commit("succsessLogin", result);

			if (result.img == true && result.nickname != "") {
				dispatch("user/downloadFile", null, { root: true });
			}

			checkToGo(result, path)

			resolve();

		}, (error) => {
			console.log(error);
		});
	},
	/**
	 * Logout
	 * @param {*} context 
	 */
	logout({ rootGetters, dispatch }) {

		dispatch("app/remove", null, { root: true });
		let firebase = rootGetters.firebase;
		firebase.auth().signOut().then(() => {

		}).catch(error => {
			throw { type: "FIREBASE_AUTH", error: error.code };
		});
	}
}

/**
 * チェックして遷移
 * @param {*} data 
 * @param {*} path 
 */
function checkToGo(data, path) {

	//プロフィールが入ってなければログイン後プロフィールへ
	if (data.img == false || data.nickname == "") {
		if (router.currentRoute.path != '/app/profile') {
			router.push('/app/profile')
		}
	}
	else if (router.currentRoute.path == '/app/profile'
		&& data.img == true
		&& data.nickname != "") {
		//プロフィールが入っている場合はプロフィールにアクセスできない
		router.push('/app/projects')
	}
	else {
		//同じページにいる場合は重複して遷移しない
		if (router.currentRoute.path != '/app' + path) {
			router.push('/app' + path)
		}
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

