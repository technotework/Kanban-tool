
<template>
  <LoginForm @login-event="onClick" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import validate from "@/containers/resorces/validator";
import LoginForm from "@/components/organisms/login-form/";
export default {
  name: "",
  props: {},
  data: () => {
    return {
      boardList: []
    };
  },
  computed: {},
  methods: {
    ...mapActions("auth", ["login"]),
    onClick(value) {
      let mailCheck = false;
      let passCheck = false;

      let objMail = {
        data: value.id,
        name: "メールアドレス",
        require: true,
        mail: true
      };
      validate(objMail, () => {
        mailCheck = true;
      });

      let objPass = {
        data: value.pass,
        name: "パスワード",
        require: true,
        password: true
      };
      validate(objPass, () => {
        passCheck = true;
      });

      if (mailCheck && passCheck) {
        this.login(value);
      }
    }
  },
  components: { LoginForm }
};
</script>
