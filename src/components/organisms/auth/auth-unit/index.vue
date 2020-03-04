<template>
  <TabContainer :class="$style.wrapper" ref="tab">
    <template #tab1>ログイン</template>
    <template #tab2>新規登録</template>

    <template #first>
      <LoginForm @login-event="onLoginClick" />
    </template>
    <template #second>
      <RegistForm @regist-event="onRegistClick" />
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
    },
    onRegistClick(value) {
      this.$emit("regist-event", value);
    },
    tabReset() {
      this.$refs.tab.tabReset();
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