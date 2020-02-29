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
  uploadFile({ rootGetters, getters, dispatch }, value) {

    return new Promise(async (resolve, reject) => {


      let data = value.data.data;
      let uuid = rootGetters["auth/user"].uuid;
      //パスの設定
      let strorage = rootGetters.storage.ref().child(uuid + "/icon");
      //アップロード
      await strorage.put(data).catch(error => {
        throw { type: TYPE.FIREBASE_STORAGE, error: error.code };
      });
      //ニックネームと画像アップロードフラグをusersに書き込み
      let object = {
        path: "users/" + uuid,
        content: { img: true, nickname: value.nickname }
      };
      await common.fb.setDoc(object).catch(reject);
      //できたら再格納
      dispatch("auth/getUserInfo", { uid: uuid, path: "app/projects" }, { root: true });

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