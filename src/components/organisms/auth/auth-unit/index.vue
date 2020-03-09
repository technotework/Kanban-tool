<template>
  <div>
    <div :class="$style.logoWrapper">
      <BaseIcon type="kanban" :class="$style.logo" />
    </div>

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
  </div>
</template>

<script>
import BaseIcon from "@/components/atoms/base-icon/";
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
  components: { BaseIcon, TabContainer, RegistForm, LoginForm }
};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 350px;
  margin: 0 auto;
}
.logoWrapper {
  width: 114px;
  margin: 50px auto 32px auto;
}
.logo {
  width: 114px;
  height: 139px;
  fill: $white;
  margin-left: -3px;
}
</style>