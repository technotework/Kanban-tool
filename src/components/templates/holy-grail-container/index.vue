<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "HolyGrailContainer"
};
</script>
<style lang="scss" module>
.container {
  --bgc: $transparent;

  position: relative;
  @include s(var(--w), var(--h));
  @include bgc(var(--bgc));
}
</style>


