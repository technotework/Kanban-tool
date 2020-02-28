<template>
  <div :class="$style.wrapper">
    <TwoColumnRepeatGrid>
      <span :class="$style.label">ID</span>
      <SystemInput placeholder="ログインIDを入力" v-model="id" required :class="$style.item" />
      <span :class="$style.label">パスワード</span>
      <SystemPassword placeholder="パスワードを入力" v-model="pass" required :class="$style.item" />
    </TwoColumnRepeatGrid>
    <MiniButton :class="$style.button" @click="onLogin">ログイン</MiniButton>
  </div>
</template>

<script>
import {
  SystemInput,
  SystemPassword
} from "@/components/atoms/base-input/compose";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";
import TwoColumnRepeatGrid from "@/components/templates/two-column-repat-grid/";
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
    TwoColumnRepeatGrid,
    SystemInput,
    SystemPassword,
    MiniButton
  }
};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 500px;
  text-align: right;
}
.item {
  @include m(0 0 $s8 0);
}
.label {
  text-align: right;
  font-weight: bold;
  @include m($s4 $s8 $s8 0);
}
.button {
  display: inline-block;
  width: 200px;
}
</style>