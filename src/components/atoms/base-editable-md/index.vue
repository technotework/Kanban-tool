<template>
  <div :class="$style.wrapper">
    <textarea
      v-model.lazy="myValue"
      :class="$style.text"
      v-show="isedit"
      ref="textArea"
    ></textarea>
    <div v-html="compiledMarkdown" :class="$style.md" v-show="!isedit"></div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import marked from "marked";

export default {
  mixins: [base],
  name: "BaseEditableMD",
  props: {
    isedit: Boolean,
    value: String
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.myValue, { sanitize: true });
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
      return this.$refs.textArea.value;
    }
  }
};
</script>
<style lang="scss" module>
.wrapper {
  display: flex;
}
.md {
  width: 100%;
  @include p($s16);
  @include bdc($gray);
}

.text {
  width: 100%;
  @include bdc($gray);
  @include p($s8);
  @include text($f16);
  resize: none;
}
</style>
