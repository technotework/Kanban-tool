<template>
  <div :class="$style.wrapper">
    <div :class="$style.firstContent">
      <H1 :class="$style.h1Header">{{teamName}}</H1>
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
import { H1 } from "@/components/atoms/base-heading/compose";
export default {
  mixins: [base],
  name: "AppHeader",
  data: function() {
    return {
      teamName: "MyTeamName"
    };
  },
  props: {},
  components: { H1 }
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
