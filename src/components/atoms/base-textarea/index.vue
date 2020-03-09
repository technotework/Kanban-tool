<template>
  <textarea :class="$style.text" v-model.lazy="content"></textarea>
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
  },
  methods: {
    onEnter() {
      this.$emit("enter-textarea-event");
    }
  }
};
</script>
<style lang="scss" module>
.text {
  width: 100%;
  @include taskText;
}
</style>
