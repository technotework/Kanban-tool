import common from "@/store/common";
//--------------
//state
//--------------
const state = {
    teamNameData: "",
    unsnapshots: []
};

//--------------
//mutations
//--------------
const mutations = {
    setData(state, payload) {
        state.teamNameData = payload;
    },
    setUnsnap(state, payload) {
        state.unsnapshots.push(payload);
    },
    remove(state) {
        for (let i = 0; i < state.unsnapshots.length; i++) {
            state.unsnapshots[i]();
        }
        state.unsnapshots = [];
        state.teamNameData = "";
    }
};

//--------------
//getters
//--------------
const getters = {
    team(state) {
        return state.teamNameData;
    }
};

//--------------
//actions
//--------------
const actions = {
    /**=============================
     * 読み込み
     * @param {*} param0 
     =============================*/
    async read({ commit, rootGetters, getters, dispatch }) {
        const teamsPath = rootGetters["auth/teamPath"];

        const object = {
            path: teamsPath,
            callback: doc => {
                const data = doc.data();
                //完了
                commit("setData", data.label);
            }
        };
        const unsnap = await common.fb.snapDoc(object);

        commit("setUnsnap", unsnap);
    },
    /**
     * プロジェクト名更新
     * @param {*} param0
     * @param {*} value
     */
    async updateTeamName({ rootGetters }, value) {
        const teamsPath = rootGetters["auth/teamPath"];
        const name = value;
        const object = {
            path: teamsPath,
            content: { label: name }
        };
        await common.fb.setDoc(object);
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
