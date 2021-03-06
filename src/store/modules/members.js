import common from "@/store/common";
//--------------
//state
//--------------
const state = {
    membersData: null,
    unsnapshots: []
};

//--------------
//mutations
//--------------
const mutations = {
    setMembersData(state, payload) {
        state.membersData = payload;
    },
    setUnsnap(state, payload) {
        state.unsnapshots.push(payload);
    },
    remove(state) {
        for (let i = 0; i < state.unsnapshots.length; i++) {
            state.unsnapshots[i]();
        }
        state.unsnapshots = [];
        state.membersData = null;
    }
};

//--------------
//getters
//--------------
const getters = {
    members(state) {
        return state.membersData;
    }
};

//--------------
//actions
//--------------
const actions = {
    /**
     * ユーザーのリストを取得
     * @param {*} param0
     */
    getMembers({ rootGetters, commit }) {
        return new Promise(
            async (resolve, reject) => {
                const object = {
                    path: "users",
                    order: "nickname",
                    callback: actions.$_readMemberCallback(commit, resolve)
                };
                const unsnap = await common.fb.snap(object);
                commit("setUnsnap", unsnap);
            },
            error => {
                //console.log(error);
            }
        );
    },
    /**
     * MemberをFirebaseが読んだ後callbackする
     * @param {*} commit
     * @param {*} resolve
     */
    $_readMemberCallback(commit, resolve) {
        return async querySnapshot => {
            const docs = querySnapshot.docs;
            let obj = {};
            for (let i = 0; i < docs.length; i++) {
                let result = docs[i].data();

                let { response, id } = await actions.$_downloadIcon(result);

                let url = response.url;
                obj[id] = {
                    img: url,
                    nickname: result.nickname
                };
            }
            commit("setMembersData", obj);
            resolve();
        };
    },
    /**
     * アイコンのダウンロード
     * @param {*} result
     */
    async $_downloadIcon(result) {
        let id = result.altId;
        let response = await common.fb.execDownloadIcon(id);
        return { response, id };
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
