export default {
  namespaced: true,
  strict: true,
  state: {
    tasksData: []
  },
  mutations: {
    createJson(state, payload) { }
  },
  getters: {
    tasks(state) {
      return state.tasksData;
    }
  },
  actions: {
    create() { },
    read() { },
    update() { },
    delete() { }
  }
}