//--------------
//state
//--------------
const state = {
  tasksData: []
}

//--------------
//mutations
//--------------
const mutations = {
  setTasksData(state, payload) {
    state.tasksData = payload;
  }
}

//--------------
//getters
//--------------
const getters = {
  tasks(state) {
    return state.tasksData;
  }
}

//--------------
//actions
//--------------
const actions = {
  create() { },
  /**
   * 初期読み込み
   * @param {*} param0 
   * @param {*} value 
   */
  read({ commit, rootGetters }, value) {
    return new Promise(async (resolve, reject) => {

      let db = rootGetters.db;
      let path = rootGetters["auth/path"];
      let projectId = rootGetters["boards/projectId"];
      let boardPath = path + projectId + "/boards/";
      let tasksPath = boardPath + value + "/tasks/"

      let collection = db.collection(tasksPath);
      collection.onSnapshot(function (querySnapshot) {

        let array = [];
        querySnapshot.forEach(function (doc) {
          let result = doc.data();
          result.task.id = doc.id;
          array.push(result);
        });

        commit("setTasksData", array);
      });

    }, (error) => {
      console.log(error);
    });
  },
  update() { },
  delete() { }
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