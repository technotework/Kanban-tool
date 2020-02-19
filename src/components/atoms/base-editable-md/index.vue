<template>
  <div :class="$style.wrapper">
    <textarea v-model.lazy="myValue" :class="$style.text" v-show="isedit" ref="textArea"></textarea>
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
      return marked(this.myValue);
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
  line-height: 2.4rem;
  @include bdc($white);
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
