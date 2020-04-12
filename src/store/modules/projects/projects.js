import actions from "./actions";
//--------------
//state
//--------------
const state = {
    appInfo: {},
    projectsData: [],
    unsnapshots: []
};

//--------------
//mutations
//--------------
const mutations = {
    setData(state, payload) {
        state.projectsData = payload;
    },
    setAppInfo(state, payload) {
        state.appInfo = payload;
    },
    setUnsnap(state, payload) {
        state.unsnapshots.push(payload);
    },
    remove(state) {
        for (let i = 0; i < state.unsnapshots.length; i++) {
            state.unsnapshots[i]();
        }
        state.unsnapshots = [];
        state.appInfo = {};
        state.projectsData = [];
    }
};

//--------------
//getters
//--------------
const getters = {
    info(state) {
        return state.appInfo;
    },
    projects(state) {
        return state.projectsData;
    }
};

//-----------------------------------------------
export { state, mutations, getters, actions };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters,
    actions
};
