<template>
  <div :class="$style.wrapper">
    <div :class="$style.firstContent">
      <H2 :class="$style.h1Header">{{pageName}}</H2>
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
import { H2 } from "@/components/atoms/base-heading/compose";
export default {
  mixins: [base],
  name: "ContentHeader",
  data: function() {
    return {
      pageName: "PageName"
    };
  },
  props: {},
  components: { H2 }
};
</script>
<style lang="scss" module>
.wrapper {
  @include flex;
  justify-content: space-between;
  @include s($w: 100%, $h: 100%);
  @include p(0 $s8);
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
