<template>
  <div :class="$style.spacer">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "LayoutSpacer"
};
</script>
<style lang="scss" module>
.spacer {
  @include p(var(--p));
  @include m(var(--m));
  @include s(var(--w), var(--h));
}
</style>


