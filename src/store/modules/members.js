import router from "@/router/"
import common from "@/store/common"
import { db, st } from "@/store/index"
import { TYPE, APP } from "@/containers/resorces/message"
//--------------
//state
//--------------
const state = {
  membersData: null,
  unsnapshots: []
}

//--------------
//mutations
//--------------
const mutations = {
  setMembersData(state, payload) {

    state.membersData = payload;
  },
  setUnsnap(state, payload) {
    state.unsnapshots.push(payload);
  },
  remove(state) {

    for (let i = 0; i < state.unsnapshots.length; i++) {
      state.unsnapshots[i]();
    }
    state.unsnapshots = [];
    state.membersData = null;
  }
}

//--------------
//getters
//--------------
const getters = {
  members(state) {
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


      let unsnap = collection.orderBy("nickname").onSnapshot(async (querySnapshot) => {

        let docs = querySnapshot.docs;
        let obj = {};
        for (let i = 0; i < docs.length; i++) {

          let result = docs[i].data();
          let id = result.altId;
          let response = await common.fb.execDownloadIcon(id);
          let url = response.url;
          obj[id] = {
            img: url,
            nickname: result.nickname
          };
        }

        commit("setMembersData", obj);
        resolve();
      });

      commit("setUnsnap", unsnap);

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