
<template>
  <AuthUnit @login-event="onLogin" @regist-event="onRegist" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
import AuthUnit from "@/components/organisms/auth/auth-unit/";
export default {
  name: "",
  props: {},
  data: () => {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["login"]),
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

      validateMultiple([objMail, objPass, objAgree], () => {
        this.login(value);
      });
    }
  },
  components: { AuthUnit }
};
</script>
