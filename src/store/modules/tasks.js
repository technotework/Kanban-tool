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
  createJson(state, payload) { }
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
  create() { },
  read() { },
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