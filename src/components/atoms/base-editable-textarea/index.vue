<template>
  <div :class="$style.wrapper">
    <textarea v-model.lazy="myValue" :class="$style.text" v-show="isedit" ref="textarea"></textarea>
    <div :class="$style.content" v-show="!isedit">{{myValue}}</div>
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
  line-height: 2.4rem;
  background-color: $white;
  padding: $s16;
}
.text {
  width: 100%;
  background-color: $white;
  padding: $s16;
  font-size: $f16;
  line-height: 2.4rem;
  resize: none;
}
</style>
