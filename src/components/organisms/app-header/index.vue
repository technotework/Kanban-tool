<template>
  <div :class="$style.wrapper">
    <div :class="$style.firstContent">
      <ClickToEditableInput role="h1Header" v-model.lazy="title" />
      <slot name="first" />
    </div>
    <nav :class="$style.secondContent">
      <div :class="$style.container">
        <slot name="second" />
      </div>
    </nav>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
export default {
  mixins: [base],
  name: "AppHeader",
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
  components: { ClickToEditableInput }
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
    @include flex;
  }
}
</style>
