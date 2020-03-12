<template>
  <div :class="$style.wrapper">
    <BaseTextArea
      ref="textarea"
      v-model="content"
      :class="$style.text"
      @meta-enter="onSubmit"
      @esc-keydown="onCancelSubmit"
    />
    <div :class="$style.buttons">
      <SecondaryMiniButton :class="$style.button" @click="onCancelSubmit">キャンセル</SecondaryMiniButton>
      <PrimaryMiniButton :class="$style.button" @click="onSubmit">送信</PrimaryMiniButton>
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseTextArea from "@/components/atoms/base-textarea/";
import {
  PrimaryMiniButton,
  SecondaryMiniButton
} from "@/components/atoms/base-no-link-button/compose";

export default {
  mixins: [base],
  name: "PostForm",
  props: {},
  data: () => {
    return {
      content: ""
    };
  },
  methods: {
    onSubmit(e) {
      this.$emit("form-add", { value: this.content, e: e });
      this.reset();
    },
    onCancelSubmit(e) {
      this.reset();
      this.$emit("form-cancel", e);
    },
    reset() {
      this.content = "";
    },
    focus() {
      this.$refs.textarea.$el.focus();
    }
  },
  computed: {},
  components: { BaseTextArea, PrimaryMiniButton, SecondaryMiniButton }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  @include postTask;
}
.text {
  height: 121px;
}
.buttons {
  @include flex;
  position: absolute;
  bottom: 10px;
  right: 8px;
}
.button {
  margin-left: 6px;
}
</style>
