//--------------
//state
//--------------
const state = {
  boardsDialogueData: null,
  projectDialogueData: null,
  authDialogueData: null
}

//--------------
//mutations
//--------------
const mutations = {
  setBoardDialogue(state, payload) {
    state.boardsDialogueData = payload;
  },
  resetBoardDialogue(state, payload) {
    state.boardsDialogueData = null;
  },
  setProjectDialogue(state, payload) {
    state.projectDialogueData = payload;
  },
  resetProjectDialogue(state, payload) {
    state.projectDialogueData = null;
  },
  setAuthDialogue(state, payload) {
    state.authDialogueData = payload;
  },
  resetAuthDialogue(state, payload) {
    state.authDialogueData = null;
  },
  remove(state, payload) {
    state.boardsDialogueDat = null;
    state.projectDialogueData = null;
    state.authDialogueData = null;
  }
}

//--------------
//getters
//--------------
const getters = {
  boardDialogue(state) {
    return state.boardsDialogueData;
  },
  projectDialogue(state) {
    return state.projectDialogueData;
  },
  authDialogue(state) {
    return state.authDialogueData;
  }

}

//--------------
//actions
//--------------
const actions = {
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