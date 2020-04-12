/**
 * ボード関連
 */
import actions from "./actions";
//--------------
//state
//--------------
const state = {
    appInfo: null,
    boardsData: [],
    projectId: "",
    unsnapshots: [],
    lastUpdateDate: null
};

//--------------
//mutations
//--------------
const mutations = {
    setAppInfo(state, payload) {
        state.projectId = payload.projectId;
        state.appInfo = payload;
    },
    setBoardsData(state, payload) {
        state.boardsData = payload;
    },
    setProjectId(state, payload) {
        state.projectId = payload;
    },
    setUnsnap(state, payload) {
        state.unsnapshots.push(payload);
    },
    setUpdateDate(state, payload) {
        let date = Math.floor(new Date().getTime() / 1000);
        state.lastUpdateDate = date;
    },
    remove(state) {
        for (let i = 0; i < state.unsnapshots.length; i++) {
            state.unsnapshots[i]();
        }
        state.unsnapshots = [];
        state.appInfo = null;
        state.boardsData = [];
        state.lastUpdateDate = null;
        state.projectId = "";
    }
};

//--------------
//getters
//--------------
const getters = {
    info(state) {
        return state.appInfo;
    },
    boards(state) {
        return state.boardsData;
    },
    projectId(state) {
        return state.projectId;
    },
    updateDate(state) {
        return state.lastUpdateDate;
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
