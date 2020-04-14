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
        console.log("a");
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
