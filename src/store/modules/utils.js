//--------------
//state
//--------------
const state = {};

//--------------
//mutations
//--------------
const mutations = {};

//--------------
//getters
//--------------
const getters = {};

//--------------
//actions
//--------------
const actions = {
    completeReceiver({ commit }) {
        //testで使っている
    }
};

export { state, mutations, getters, actions };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters,
    actions
};
