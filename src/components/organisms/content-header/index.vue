<template>
  <div :class="$style.wrapper">
    <div :class="$style.firstContent">
      <H2 :class="$style.h1Header">
        <slot name="first" />
      </H2>
      <slot name="option" />
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
import { H2 } from "@/components/atoms/base-heading/compose";
import IconedTextButton from "@/components/molecules/iconed-text-button/";
export default {
  mixins: [base],
  name: "ContentHeader",
  data: function() {
    return {};
  },
  props: {},
  components: { H2, IconedTextButton }
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
