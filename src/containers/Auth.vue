
<template>
  <LoginForm @login-event="onClick" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
      this.login(value);
    }
  },
  components: { LoginForm }
};
</script>
