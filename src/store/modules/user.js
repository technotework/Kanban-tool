import router from "@/router/"
import common from "@/store/common"
import { TYPE, APP } from "@/containers/resorces/message"
//--------------
//state
//--------------
const state = {
}

//--------------
//mutations
//--------------
const mutations = {

}

//--------------
//getters
//--------------
const getters = {

}

//--------------
//actions
//--------------
const actions = {
  /**
   * アイコンアップロード
   * @param {*} param0 
   * @param {*} value 
   */
  uploadFile({ rootGetters, getters, dispatch }, value) {

    return new Promise(async (resolve, reject) => {

      let data = value.data.data;
      let uuid = rootGetters["auth/user"].uuid;

      //upload
      let upload = {
        path: uuid + "/icon",
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
      dispatch("auth/getUserInfo", { uid: uuid, path: "app/projects" }, { root: true });
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

      let uid = rootGetters["auth/user"].uuid;
      let ref = rootGetters.storage.ref(uid + '/icon');
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