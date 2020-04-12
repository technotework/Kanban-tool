import common from "@/store/common";
import router from "@/router/";
import { v4 as uuidv4 } from "uuid";
import { contractId, teamId } from "@/setting";
//--------------
//actions
//--------------
const actions = {
    /**========================
     * Login
     * @param {*} context
     * @param {*} idとpass
     ========================*/
    async login({ dispatch }, value) {
        const object = {
            id: value.id,
            pass: value.pass,
            callback: value.callback
        };
        const result = await common.fb.login(object);
        //ログインしたらログインユーザーデータを格納
        if (result.type == "succsess") {
            dispatch("setUserInfo", {
                uid: result.uid,
                path: result.path
            });
        } else {
            dispatch("logout");
        }
    },
    /**========================
     * ユーザー登録と初期生成
     * @param {*} context
     * @param {*} idとpass
    ======================== */
    async regist({ dispatch }, value) {
        const userUid = await actions.$_registUser(value);
        //初期データ作成
        actions.$_createInitUserData(userUid);
    },
    /**
     * ユーザー登録
     * @param {*} value
     */
    async $_registUser(value) {
        const registData = {
            id: value.id,
            pass: value.pass,
            callback: value.callback
        };
        const userUid = await common.fb.regist(registData);
        return userUid;
    },
    /**
     * ユーザー初期データ生成
     * @param {*} userUid
     */
    $_createInitUserData(userUid) {
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
    /**========================
     * setUserInfo
     * @param {*} context
     * @param {*} uid
    ======================== */
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
        actions.$_checkToGo(result, path);
    },
    /**
     * チェックして遷移
     * @param {*} data
     * @param {*} path
     */
    $_checkToGo(data, path) {
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
    },
    /**========================
     * Logout
     * @param {*} context
     ========================*/
    async logout({ dispatch }) {
        dispatch("app/remove", null, { root: true });
        await common.fb.logout();
    }
};

export default actions;
