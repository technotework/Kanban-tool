import store from "@/store/index"
import common from "@/store/common"
//--------------
//state
//--------------
const state = {
  teamNameData: "",
  unsnapshots: []
}

//--------------
//mutations
//--------------
const mutations = {

  setData(state, payload) {

    state.teamNameData = payload;
  },
  setUnsnap(state, payload) {
    state.unsnapshots.push(payload);
  },
  remove(state) {

    for (let i = 0; i < state.unsnapshots.length; i++) {
      state.unsnapshots[i]();
    }
    state.unsnapshots = [];
    state.teamNameData = "";
  }

}

//--------------
//getters
//--------------
const getters = {
  team(state) {
    return state.teamNameData;
  }
}

//--------------
//actions
//--------------
const actions = {

	/**=============================
	 * 読み込み
	 * @param {*} param0 
	 =============================*/
  read({ commit, rootGetters, getters, dispatch }) {

    return new Promise((resolve, reject) => {

      let teamsPath = rootGetters["auth/teamPath"];

      let db = rootGetters.db;
      //TeamNameをRead&Listen
      let doc = db.doc(teamsPath);
      let unsnap = doc.onSnapshot(function (doc) {
        let data = doc.data();
        //完了
        commit("setData", data.label);
      });
      commit("setUnsnap", unsnap);

    }, (error) => {
      console.log(error);
    });

  },
	/**
	 * プロジェクト名更新
	 * @param {*} param0 
	 * @param {*} value 
	 */
  updateTeamName({ rootGetters }, value) {
    return new Promise(async (resolve, reject) => {

      let teamsPath = rootGetters["auth/teamPath"];
      let name = value;
      let object = {
        path: teamsPath,
        content: { "label": name }
      };
      await common.fb.setDoc(object).catch(reject);
      resolve();

    }, (error) => {
      console.log(error);
    });

  }
}

export {
  state,
  mutations,
  getters,
  actions
}
export default {
  namespaced: true,
  strict: true,
  state,
  mutations,
  getters,
  actions
}
