import common from "@/store/common";
//--------------
//state
//--------------
const state = {
    userDataObject: null
};

//--------------
//mutations
//--------------
const mutations = {
    setUserData(state, payload) {
        state.userDataObject = payload;
    },
    remove(state, payload) {
        state.userDataObject = null;
    }
};

//--------------
//getters
//--------------
const getters = {
    userData(state) {
        return state.userDataObject;
    }
};

//--------------
//actions
//--------------
const actions = {
    /**
     * 自分のユーザー情報取得
     * @param {*} param0
     * @param {*} obj
     */
    async getUserInfo({ commit, dispatch }, obj) {
        const { uid } = obj;
        const object = {
            path: `users/${uid}`
        };
        const doc = await common.fb.getDoc(object);

        commit("setUserData", doc.data());
    },
    /**
     * プロフィール入力後の処理
     * アイコンアップロード
     * @param {*} param0
     * @param {*} value
     */
    async uploadFile({ rootGetters, getters, dispatch }, value) {
        const data = value.data.data;
        const uuid = rootGetters["auth/user"].uuid;
        const id = rootGetters["auth/user"].altId;

        //upload
        const upload = {
            path: id + "/icon",
            content: data
        };
        await common.fb.upload(upload);

        //ニックネームと画像アップロードフラグをusersに書き込み
        const userData = {
            path: "users/" + uuid,
            content: { img: true, nickname: value.nickname }
        };
        await common.fb.updateDoc(userData);

        //できたら再取得
        dispatch(
            "auth/setUserInfo",
            { uid: uuid, path: "app/projects" },
            { root: true }
        );
        dispatch("downloadFile");
    },
    /**
     * アイコンダウンロード
     * @param {*} param0
     */
    async downloadFile({ rootGetters, commit }) {
        const id = rootGetters["auth/user"].altId;
        const response = await common.fb.execDownloadIcon(id);
        commit("auth/setImage", response.url, { root: true });
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
