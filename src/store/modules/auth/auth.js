/**
 * ログイン・登録・ログアウト
 */
import actions from "./actions";
import { contractId, teamId } from "@/setting";
//--------------
//state
//--------------
const state = {
    userData: null,
    contractData: "",
    teamData: "",
    pathData: "",
    teamPathData: "",
    isLogin: false,
    imgData: null
};

//--------------
//mutations
//--------------
const mutations = {
    succsessLogin(state, payload) {
        state.userData = payload;
        //DEMOのため現状契約IDとチームIDは固定にしておく
        state.contractData = contractId;
        state.teamData = teamId;
        state.teamPathData = `workspace/${state.contractData}/teams/${state.teamData}`;
        state.pathData = state.teamPathData + `/projects/`;
        state.isLogin = true;
    },
    remove(state, payload) {
        state.userData = null;
        state.contractData = null;
        state.teamData = null;
        state.pathData = null;
        state.teamPathData = null;
        state.isLogin = false;
        state.imgData = null;
    },
    setImage(state, payload) {
        state.imgData = payload;
    }
};

//--------------
//getters
//--------------
const getters = {
    user(state) {
        return state.userData;
    },
    contract(state) {
        return state.contractData;
    },
    team(state) {
        return state.teamData;
    },
    path(state) {
        return state.pathData;
    },
    teamPath(state) {
        return state.teamPathData;
    },
    isLogin(state) {
        return state.isLogin;
    },
    icon(state) {
        return state.imgData;
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
