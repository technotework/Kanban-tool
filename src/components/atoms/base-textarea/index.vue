<template>
  <textarea
    ref="textarea"
    :class="$style.text"
    v-model="content"
    @keydown.13.meta="onEnter"
    @keydown.13.ctrl="onEnter"
    @keyup.27="onEsc"
  ></textarea>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseTextArea",
  props: {
    value: String
  },
  data: () => {
    return {
      temp: ""
    };
  },
  computed: {
    content: {
      get() {
        return this.value;
      },
      set(value) {
        this.temp = value;
        this.$emit("input", value);
      }
    }
  },
  methods: {
    onEnter() {
      this.$refs.textarea.blur();
      this.$emit("input", this.temp);
      this.$emit("meta-enter");
    },
    onEsc() {
      this.$emit("esc-keydown");
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
