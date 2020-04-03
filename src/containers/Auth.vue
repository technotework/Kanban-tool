<template>
    <AuthUnit @login-event="onLogin" @regist-event="onRegist" ref="authUnit" />
</template>

<script>
/**
 *認証情報のVuex通信を行うコンポーネント
 */
import { mapActions, mapGetters, mapMutations } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
import { getConfirmMessage } from "@/containers/resorces/message";
import AuthUnit from "@/components/organisms/auth/auth-unit/";
export default {
    name: "Auth",
    data: () => {
        return {};
    },
    computed: {},
    methods: {
        ...mapActions("auth", ["login", "regist"]),
        ...mapMutations("message", ["setAuthDialogue", "resetAuthDialogue"]),
        onLogin(value) {
            let objMail = {
                data: value.id,
                name: "メールアドレス",
                require: true,
                email: true
            };

            let objPass = {
                data: value.pass,
                name: "パスワード",
                require: true,
                password: true
            };

            validateMultiple([objMail, objPass], () => {
                //login先にvalueにcallbackを登録して渡す
                value.callback = () => {
                    this.onLoginFail();
                };
                this.login(value);
            });
        },
        onRegist(value) {
            let objMail = {
                data: value.id,
                name: "メールアドレス",
                require: true,
                email: true
            };

            let objPass = {
                data: value.pass,
                name: "パスワード",
                more: 8,
                require: true,
                password: true
            };

            let objAgree = {
                data: value.agree,
                name: "利用規約に同意",
                agree: true
            };

            validateMultiple([objMail, objPass, objAgree], () => {
                value.callback = () => {
                    this.onCompleteRegist();
                };
                this.regist(value);
            });
        },
        onCompleteRegist() {
            let message = getConfirmMessage({
                type: TYPE.ALERT,
                normal: APP.SENDMAIL
            });
            let p = () => {
                this.$refs.authUnit.tabReset();
                this.resetAuthDialogue();
            };
            let object = { text: message[0].text, p: p, s: null };

            this.setAuthDialogue(object);
        },
        onLoginFail() {
            let message = getConfirmMessage({
                type: TYPE.ALERT,
                normal: APP.NO_AUTH
            });
            let p = () => {
                this.resetAuthDialogue();
            };
            let object = { text: message[0].text, p: p, s: null };

            this.setAuthDialogue(object);
        }
    },
    components: { AuthUnit }
};
</script>
