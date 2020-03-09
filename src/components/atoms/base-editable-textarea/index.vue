<template>
  <div :class="$style.wrapper">
    <textarea
      v-model.lazy="myValue"
      :class="$style.text"
      class="ignore"
      v-show="isedit"
      ref="textarea"
      v-shortkey="shortcut"
      @shortkey="onEnter"
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
    shortcut() {
      let shortcut = [];
      let ua = window.navigator.userAgent.toLowerCase();

      if (ua.indexOf("mac") != -1) {
        shortcut = ["meta", "enter"];
      } else {
        shortcut = ["ctrl", "enter"];
      }
      return shortcut;
    },
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
    },
    onEnter: function() {
      this.$emit("enter-event");
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
