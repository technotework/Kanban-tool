<template>
  <div :class="$style.wrapper">
    <textarea
      v-model.lazy="myValue"
      :class="$style.text"
      class="ignore"
      v-show="isedit"
      ref="textarea"
    ></textarea>
    <div :class="$style.content" v-show="!isedit" @dblclick="onDClick">{{myValue}}</div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
//import marked from "marked";

export default {
  mixins: [base],
  name: "BaseEditableTextArea",
  props: {
    isedit: Boolean,
    value: String
  },
  computed: {
    myValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    getContent: function() {
      return this.$refs.textarea.value;
    },
    onDClick: function() {
      this.$emit("dblclick");
    }
  }
};
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
}
.content {
  width: 100%;
  @include taskText;
  background-color: $transparent;
}
.text {
  width: 100%;
  @include taskText;
  resize: none;
}
</style>
