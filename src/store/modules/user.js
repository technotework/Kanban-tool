import router from "@/router/"
import common from "@/store/common"
import { TYPE, APP } from "@/containers/resorces/message"
//--------------
//state
//--------------
const state = {
  userDataObject: {}
}

//--------------
//mutations
//--------------
const mutations = {
  setUserData(state, payload) {
    state.userDataObject = payload;
  }
}

//--------------
//getters
//--------------
const getters = {
  userData(state) {
    return state.userDataObject;
  }
}

//--------------
//actions
//--------------
const actions = {

  getUserInfo({ commit, dispatch }, obj) {
    return new Promise(async (resolve, reject) => {

      let { uid } = obj
      let object = {
        path: `users/${uid}`
      };
      let doc = await common.fb.getDoc(object).catch(reject);

      commit("setUserData", doc.data());
      resolve();
      console.log(doc.data());
    }, (error) => {
      console.log(error);
    });
  },
  /**
   * アイコンアップロード
   * @param {*} param0 
   * @param {*} value 
   */
  uploadFile({ rootGetters, getters, dispatch }, value) {

    return new Promise(async (resolve, reject) => {

      let data = value.data.data;
      let uuid = rootGetters["auth/user"].uuid;
      let id = rootGetters["auth/user"].altId;

      //upload
      let upload = {
        path: id + "/icon",
        content: data
      };
      await common.fb.upload(upload);

      //ニックネームと画像アップロードフラグをusersに書き込み
      let userData = {
        path: "users/" + uuid,
        content: { img: true, nickname: value.nickname }
      };
      await common.fb.setDoc(userData).catch(reject);

      //できたら再格納
      dispatch("auth/setUserInfo", { uid: uuid, path: "app/projects" }, { root: true });
      dispatch("downloadFile");

      resolve();

    }, (error) => {
      console.log(error);
    });
  },
  /**
   * アイコンダウンロード
   * @param {*} param0 
   */
  downloadFile({ rootGetters, commit }) {
    return new Promise(async (resolve, reject) => {

      let id = rootGetters["auth/user"].altId;
      let ref = rootGetters.storage.ref(id + '/icon');
      let url = await ref.getDownloadURL();
      let response = await fetch(url);
      commit("auth/setImage", response.url, { root: true });

    }, (error) => {
      console.log(error);
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