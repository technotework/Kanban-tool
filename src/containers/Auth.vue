<template>
    <AuthUnit @login-event="onLogin" @regist-event="onRegist" ref="authUnit" />
</template>

<script>
/**
 *認証情報のVuexModules authと通信を行うコンテナ
 */
import { mapActions, mapGetters, mapMutations } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
import { getConfirmMessage } from "@/containers/resorces/message";
import AuthUnit from "@/components/organisms/auth/auth-unit/";
export default {
    name: "Auth",
    methods: {
        ...mapActions("auth", ["login", "regist"]),
        ...mapMutations("message", ["setAuthDialogue", "resetAuthDialogue"]),
        /**
         * ログインデータをうけてバリデーションエラーをかけて
         * 問題なければStoreに渡す
         */
        onLogin(value) {
            const objMail = {
                data: value.id,
                name: "メールアドレス",
                require: true,
                email: true,
            };

            const objPass = {
                data: value.pass,
                name: "パスワード",
                require: true,
                password: true,
            };

            validateMultiple([objMail, objPass], () => {
                //storeからcallbackされる
                value.callback = () => {
                    this.onLoginFail();
                };
                //ログインをstoreになげる
                this.login(value);
            });
        },
        /**
         * 登録データをうけてバリデーションエラーをかけて
         * 問題なければStoreに渡す
         */
        onRegist(value) {
            const objMail = {
                data: value.id,
                name: "メールアドレス",
                require: true,
                email: true,
            };

            const objPass = {
                data: value.pass,
                name: "パスワード",
                more: 8,
                require: true,
                password: true,
            };

            const objAgree = {
                data: value.agree,
                name: "利用規約に同意",
                agree: true,
            };

            validateMultiple([objMail, objPass, objAgree], () => {
                //storeからcallbackされる
                value.callback = () => {
                    this.onCompleteRegist();
                };
                //auth storeになげる
                this.regist(value);
            });
        },
        /**
         * 登録完了ダイアログコールバック
         */
        onCompleteRegist() {
            //ダイアログ表示データ取得
            const message = getConfirmMessage({
                type: TYPE.ALERT,
                normal: APP.SENDMAIL,
            });
            //primary button callback
            const p = () => {
                this.$refs.authUnit.tabReset();
                //ダイアログStoreデータリセット
                this.resetAuthDialogue();
            };
            //ダイアログデータ構成
            const object = { text: message[0].text, p: p, s: null };

            this.setAuthDialogue(object);
        },
        /**
         *メール認証してない状態でログイン失敗した場合のメッセージ
         */
        onLoginFail() {
            //ダイアログ表示データ取得
            const message = getConfirmMessage({
                type: TYPE.ALERT,
                normal: APP.NO_AUTH,
            });
            //primary button callback
            const p = () => {
                //ダイアログStoreデータリセット
                this.resetAuthDialogue();
            };
            //ダイアログデータ構成
            const object = { text: message[0].text, p: p, s: null };

            this.setAuthDialogue(object);
        },
    },
    components: { AuthUnit },
};
</script>
