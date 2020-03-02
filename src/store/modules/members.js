import router from "@/router/"
import common from "@/store/common"
import { db, st } from "@/store/index"
import { TYPE, APP } from "@/containers/resorces/message"
//--------------
//state
//--------------
const state = {
  membersData: null
}

//--------------
//mutations
//--------------
const mutations = {
  setMembersData(state, payload) {

    state.membersData = payload;
  }
}

//--------------
//getters
//--------------
const getters = {
  users(state) {
    return state.membersData;
  }
}

//--------------
//actions
//--------------
const actions = {

  /**
   * ユーザーのリストを取得
   * @param {*} param0 
   */
  getMembers({ rootGetters, commit }) {

    return new Promise(async (resolve, reject) => {

      let db = rootGetters.db;
      let collection = db.collection("users");


      collection.orderBy("nickname").onSnapshot(async (querySnapshot) => {

        let docs = querySnapshot.docs;
        let array = [];
        for (let i = 0; i < docs.length; i++) {

          let result = docs[i].data();
          let id = result.altId;
          let response = await common.fb.execDownloadIcon(id);
          let url = response.url;
          let obj = {
            altId: id,
            img: url,
            nickname: result.nickname
          };
          array.push(obj);
        }

        commit("setMembersData", array);
        resolve();
      });

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