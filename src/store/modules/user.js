import router from "@/router/";
import common from "@/store/common";
import { TYPE, APP } from "@/containers/resorces/message";
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
    getUserInfo({ commit, dispatch }, obj) {
        return new Promise(
            async (resolve, reject) => {
                const { uid } = obj;
                const object = {
                    path: `users/${uid}`
                };
                const doc = await common.fb.getDoc(object).catch(reject);

                commit("setUserData", doc.data());
                resolve();
            },
            error => {
                //console.log(error);
            }
        );
    },
    /**
     * プロフィール入力後の処理
     * アイコンアップロード
     * @param {*} param0
     * @param {*} value
     */
    uploadFile({ rootGetters, getters, dispatch }, value) {
        return new Promise(
            async (resolve, reject) => {
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
                await common.fb.updateDoc(userData).catch(reject);

                //できたら再取得
                dispatch(
                    "auth/setUserInfo",
                    { uid: uuid, path: "app/projects" },
                    { root: true }
                );
                dispatch("downloadFile");
                resolve();
            },
            error => {
                //console.log(error);
            }
        );
    },
    /**
     * アイコンダウンロード
     * @param {*} param0
     */
    downloadFile({ rootGetters, commit }) {
        return new Promise(
            async (resolve, reject) => {
                const id = rootGetters["auth/user"].altId;
                const response = await common.fb.execDownloadIcon(id);
                commit("auth/setImage", response.url, { root: true });
            },
            error => {
                //console.log(error);
            }
        );
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
