<template>
  <TabContainer :class="$style.wrapper">
    <template #tab1>ログイン</template>
    <template #tab2>会員登録</template>

    <template #first>
      <LoginForm @login-event="onLoginClick" />
    </template>
    <template #second>
      <RegistForm />
    </template>
  </TabContainer>
</template>

<script>
import LoginForm from "@/components/organisms/auth/login-form/";
import RegistForm from "@/components/organisms/auth/regist-form/";
import TabContainer from "@/components/molecules/tab-container/";
export default {
  name: "AuthUnit",
  data: () => {
    return {};
  },
  props: {},
  methods: {
    onLoginClick(value) {
      this.$emit("login-event", value);
    }
  },
  components: { TabContainer, RegistForm, LoginForm }
};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 500px;
}
</style>