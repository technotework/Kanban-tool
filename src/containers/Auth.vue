
<template>
  <LoginForm @login-event="onClick" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { validateMultiple } from "@/containers/resorces/validator";
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
      console.log(value);
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
    }
  },
  components: { LoginForm }
};
</script>
