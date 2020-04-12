/**
 * ログイン・登録・ログアウト
 */
import common from "@/store/common";
import router from "@/router/";
import { v4 as uuidv4 } from "uuid";
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

//--------------
//actions
//--------------
const actions = {
    /**
     * Login
     * @param {*} context
     * @param {*} idとpass
     */
    async login({ dispatch }, value) {
        const object = {
            id: value.id,
            pass: value.pass,
            callback: value.callback
        };
        const result = await common.fb.login(object);
        if (result.type == "succsess") {
            dispatch("setUserInfo", {
                uid: result.uid,
                path: result.path
            });
        } else {
            dispatch("logout");
        }
    },
    /**
     * singUp
     * @param {*} context
     * @param {*} idとpass
     */
    async regist({ dispatch }, value) {
        const registData = {
            id: value.id,
            pass: value.pass,
            callback: value.callback
        };

        const userUid = await common.fb.regist(registData);

        //初期データ作成
        const uid = userUid;
        const altId = uuidv4();
        const contract = contractId;
        const team = teamId;
        const userTemplate = common.templates.user(contract, team, altId);

        const object = {
            path: "/users/" + uid,
            content: userTemplate
        };
        common.fb.setDoc(object);
    },
    /**
     * setUserInfo
     * @param {*} context
     * @param {*} uid
     */
    async setUserInfo({ commit, getters, rootGetters, dispatch }, obj) {
        const { uid, path } = obj;

        //ログイン後やリロード後なにもユーザーデータがない
        //if (rootGetters["user/userData"] == null) {
        //ユーザーデータ取得を別モジュールに依頼
        await dispatch("user/getUserInfo", obj, { root: true });

        const result = rootGetters["user/userData"];
        result.uuid = uid;
        result.path = result.altId + "/icon";
        //ユーザーデータを格納
        commit("succsessLogin", result);

        //すでにアイコンとニックネームがあれば格納する
        if (result.img == true && result.nickname != "") {
            dispatch("user/downloadFile", null, { root: true });
        }
        //遷移
        checkToGo(result, path);
    },
    /**
     * Logout
     * @param {*} context
     */
    async logout({ dispatch }) {
        dispatch("app/remove", null, { root: true });
        await common.fb.logout();
    }
};

/**
 * チェックして遷移
 * @param {*} data
 * @param {*} path
 */
function checkToGo(data, path) {
    //プロフィールが入ってなければログイン後プロフィールへ
    if (data.img == false || data.nickname == "") {
        if (router.currentRoute.path != "/profile") {
            router.push("/profile");
        }
    } else if (
        router.currentRoute.path == "/profile" &&
        data.img == true &&
        data.nickname != ""
    ) {
        //プロフィールが入っている場合はプロフィールにアクセスできない
        router.push("/projects");
    } else {
        //同じページにいる場合は重複して遷移しない
        if (router.currentRoute.path != path) {
            router.push(path);
        }
    }
}

export { state, mutations, getters, actions };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters,
    actions
};
