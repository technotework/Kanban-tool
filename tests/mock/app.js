import mockStore from "./store";
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
    //一括リセット
    remove({ commit }) {},
    registModule({ commit }, object) {
        const { name, module } = object;
        mockStore().registerModule(name, module);
    },
    unregistModule({ commit }, storeModuleName) {}
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
