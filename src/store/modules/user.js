import router from "@/router/"
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
  uploadFile({ rootGetters, getters }, value) {

    let data = value.data.data;
    let uuid = rootGetters["auth/user"].uuid;

    let strorage = rootGetters.storage.ref().child(uuid + "/icon");

    strorage.put(data).then(function (snapshot) {

      router.push('/app/projects');

    }).catch(error => {
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