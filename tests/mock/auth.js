/**
 * ログイン・登録・ログアウト
 */
//--------------
//state
//--------------
const state = {};

//--------------
//mutations
//--------------
const mutations = {
    succsessLogin(state, payload) {},
    remove(state, payload) {},
    setImage(state, payload) {}
};

//--------------
//getters
//--------------
const getters = {
    user(state) {
        return {
            altId: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
            contracts: { contractId: ["teamId"] },
            img: true,
            isDeleted: false,
            nickname: "Lucas",
            role: "manager",
            uuid: "cTJUncptCPOMCJj9NHWq9ubIgMW2",
            path: "23ac86c5-8f58-44b1-b823-ca2856ba5de2/icon"
        };
    },
    contract(state) {
        return "contractId";
    },
    team(state) {
        return "teamId";
    },
    path(state) {
        return "workspace/contractId/teams/teamId/projects/";
    },
    teamPath(state) {
        return "workspace/contractId/teams/teamId/";
    },
    isLogin(state) {
        return true;
    },
    icon(state) {
        return "https://firebasestorage.googleapis.com/v0/b/kanbandemo-d436e.appspot.com/o/23ac86c5-8f58-44b1-b823-ca2856ba5de2%2Ficon?alt=media&token=41d41cac-2291-412e-b772-d8517e0342b1";
    }
};

export { state, mutations, getters };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters
};
