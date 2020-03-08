<template>
  <div :class="$style.wrapper">
    <TwoColumnRepeatGrid>
      <span :class="$style.label">メールアドレス</span>
      <SystemInput placeholder="メールアドレスを入力" v-model="id" required :class="$style.item" />
      <span :class="$style.label">パスワード</span>
      <SystemPassword placeholder="パスワードを入力" v-model="pass" required :class="$style.item" />
    </TwoColumnRepeatGrid>
    <div :class="$style.bottoms">
      <LabeledCheckbox id="agreement" value="agreement" v-model="modelData" :class="$style.agree">
        <a href="#" target="_blank">利用規約</a>に同意する
      </LabeledCheckbox>
      <MiniButton :class="$style.button" @click="onRegist">登録</MiniButton>
    </div>
  </div>
</template>

<script>
import {
  SystemInput,
  SystemPassword
} from "@/components/atoms/base-input/compose";
import LabeledCheckbox from "@/components/molecules/labeled-check-box/base";
import { MiniButton } from "@/components/atoms/base-no-link-button/compose";
import TwoColumnRepeatGrid from "@/components/templates/two-column-repat-grid/";
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "registForm",
  data: () => {
    return {
      id: "",
      pass: "",
      agree: false
    };
  },
  props: {},
  computed: {
    modelData: {
      get() {
        return this.agree;
      },
      set(value) {
        this.agree = value;
      }
    }
  },
  methods: {
    onRegist(e) {
      this.$emit("regist-event", {
        id: this.id,
        pass: this.pass,
        agree: this.agree,
        e: e
      });
    }
  },
  components: {
    TwoColumnRepeatGrid,
    SystemInput,
    SystemPassword,
    MiniButton,
    LabeledCheckbox
  }
};
</script>

<style lang="scss" module>
.wrapper {
  max-width: 500px;
  text-align: right;
}
.item {
  margin: 0 0 $s8 0;
}
.label {
  text-align: right;
  font-weight: bold;
  margin: $s4 $s8 $s8 0;
}
.agree {
  display: inline-block;
  margin: $s8 $s8 0 0;
  user-select: none;
}
.button {
  display: inline-block;
  width: 200px;
}
.bottoms {
  display: flex;
  justify-content: flex-end;
}
</style>