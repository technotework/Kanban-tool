<template>
  <div :class="$style.wrapper">
    <textarea :class="$style.text" v-model.lazy="content"></textarea>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseTextArea",
  props: {
    value: String
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
  }
};
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
}
.text {
  width: 100%;
  @include bdc($white);
  @include p($s16);
  font-size: $f16;
  line-height: 2.4rem;
  resize: none;
}
</style>
