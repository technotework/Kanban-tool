<template>
  <div :class="$style.wrapper">
    <span :class="$style.label">ID</span>
    <SystemInput v-model="id" required :class="$style.item" />
    <span :class="$style.label">パスワード</span>
    <SystemPassword v-model="pass" required :class="$style.item" />
    <div :class="$style.submit">
      <MiniButton :class="$style.button" @click="onLogin">ログイン</MiniButton>
    </div>
  </div>
</template>

<script>
import {
  SystemInput,
  SystemPassword
} from "@/components/atoms/base-input/compose";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";

import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "loginForm",
  data: () => {
    return {
      id: "",
      pass: ""
    };
  },
  props: {},
  methods: {
    onLogin(e) {
      this.$emit("login-event", { id: this.id, pass: this.pass, e: e });
    }
  },
  components: {
    SystemInput,
    SystemPassword,
    MiniButton
  }
};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 350px;
}
.item {
  margin: 0 0 19px 0;
}
.label {
  @include authLabel;
}
.submit {
  width: 100%;
  text-align: right;
}
.button {
  display: inline-block;
  width: 86px;
}
</style>