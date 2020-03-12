import common from "@/store/common"
import router from "@/router/"
import { v4 as uuidv4 } from "uuid";
import { contractId, teamId } from "@/setting"
//--------------
//state
//--------------
const state = {
	userData: null,
	contractData: "",
	teamData: "",
	pathData: "",
	teamPathData: "",
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
		state.contractData = contractId;
		state.teamData = teamId;
		state.teamPathData = `workspace/${state.contractData}/teams/${state.teamData}`;
		state.pathData = state.teamPathData + `/projects/`;
		state.isLogin = true;
	},
	remove(state, payload) {
		state.userData = null;
		state.contractData = null;
		state.teamData = null;
		state.pathData = null;
		state.teamPathData = null;
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
	teamPath(state) {
		return state.teamPathData;
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
			//console.log(error);
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
					let contract = contractId;
					let team = teamId;
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
			//console.log(error);
		});
	},
	/**
	 * setUserInfo
	 * @param {*} context 
	 * @param {*} uid 
	 */
	setUserInfo({ commit, getters, rootGetters, dispatch }, obj) {

		return new Promise(async (resolve, reject) => {

			let { uid, path } = obj

			//ログイン後やリロード後なにもユーザーデータがない
			//if (rootGetters["user/userData"] == null) {
			//ユーザーデータ取得を別モジュールに依頼
			await dispatch("user/getUserInfo", obj, { root: true });

			let result = rootGetters["user/userData"];
			result.uuid = uid;
			result.path = result.altId + "/icon";
			//ユーザーデータを格納
			commit("succsessLogin", result);

			//すでにアイコンとニックネームがあれば格納する
			if (result.img == true && result.nickname != "") {
				dispatch("user/downloadFile", null, { root: true });
			}
			//遷移
			checkToGo(result, path);
			resolve();
			/*}
				else {
	
					resolve();
				}*/
		}, (error) => {
			//console.log(error);
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
		if (router.currentRoute.path != '/profile') {

			router.push('/profile');
		}
	}
	else if (router.currentRoute.path == '/profile'
		&& data.img == true
		&& data.nickname != "") {

		//プロフィールが入っている場合はプロフィールにアクセスできない
		router.push('/projects');
	}
	else {
		//同じページにいる場合は重複して遷移しない
		if (router.currentRoute.path != path) {

			router.push(path);
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

