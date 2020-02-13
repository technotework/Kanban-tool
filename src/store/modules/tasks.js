import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    tasksData: []
  },
  mutations: {
    createJson(state, payload) {}
  },
  getters: {
    tasks(state) {
      return state.tasksData;
    }
  },
  actions: {
    create() {},
    read() {},
    update() {},
    delete() {}
  }
})