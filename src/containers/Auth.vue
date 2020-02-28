
<template>
  <AuthUnit @login-event="onClick" />
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
  components: { AuthUnit }
};
</script>
