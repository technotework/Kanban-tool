<template>
  <div :class="$style.wrapper">
    <BaseTextArea v-model.lazy="content" :class="$style.text" />
    <div :class="$style.buttons">
      <TextButton :class="$style.button" @click="onCancelSubmit">
        キャンセル
      </TextButton>
      <TextButton :class="$style.button" @click="onSubmit">
        送信
      </TextButton>
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseTextArea from "@/components/atoms/base-textarea/";
import { TextButton } from "@/components/atoms/base-no-link-button/compose";

export default {
  mixins: [base],
  name: "PostForm",
  props: {
    value: String
  },
  methods: {
    onSubmit: function(e) {
      this.$emit("form-add", { value: this.content, e: e });
    },
    onCancelSubmit: function(e) {
      this.reset();
      this.$emit("form-cancel", e);
    },
    reset: function() {
      this.content = "";
    }
  },
  computed: {
    content: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { BaseTextArea, TextButton }
};
</script>
<style lang="scss" module>
.wrapper {
  position: relative;
  @include p(0 0 3.6rem 0);
}
.text {
  @include s($mh: 100px);
  @include r($round);
  @include bdc($primary);
}
.buttons {
  @include flex;
  @include abs($b: 0, $r: $s8);
}
.button {
  display: block;
  @include text($f12);
  text-decoration: underline;
  @include c($primary);
  :focus {
    @include c($phover);
  }
}
</style>
