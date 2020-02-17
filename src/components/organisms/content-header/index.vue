<template>
  <div :class="$style.wrapper">
    <div :class="$style.firstContent">
      <ClickToEditableInput role="h2Header" v-model.lazy="title" />
      <slot name="first" />
    </div>
    <nav :class="$style.secondContent">
      <div :class="$style.container">
        <IconedTextButton compose="right" type="new" @click="onClick">
          <slot name="second" />
        </IconedTextButton>
      </div>
    </nav>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import IconedTextButton from "@/components/molecules/iconed-text-button/";
export default {
  mixins: [base],
  name: "ContentHeader",
  props: {
    value: String
  },
  computed: {
    title: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { ClickToEditableInput, IconedTextButton }
};
</script>
<style lang="scss" module>
.wrapper {
  @include flex;
  justify-content: space-between;
  @include s($w: 100%, $h: 100%);
}
.firstContent {
  @include flex;
}
.secondContent {
  display: inline-block;

  .container {
    @include m(6px 0 0 0);
    @include flex;
  }
}
</style>
