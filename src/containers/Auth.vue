
<template>
  <AuthUnit @login-event="onLogin" @regist-event="onRegist" ref="authUnit" />
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
import { getConfirmMessage } from "@/containers/resorces/message";
import AuthUnit from "@/components/organisms/auth/auth-unit/";
export default {
  name: "",
  props: {},
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
      this.onCompleteRegist();
      validateMultiple([objMail, objPass, objAgree], () => {
        value.callback = () => {
          console.log("hoge");
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
        console.log(this.$refs.authUnit);
        this.$refs.authUnit.tabReset();
        this.resetAuthDialogue();
      };
      console.log(message);
      let object = { text: message[0].text, p: p, s: null };

      this.setAuthDialogue(object);
    }
  },
  components: { AuthUnit }
};
</script>
