<template>
  <div :class="$compose[compose]">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "LayoutPositioner",
  props: {
    position: String
  }
};
</script>
<style lang="scss" module="$compose">
.absolute {
  --pt: auto;
  --pb: auto;
  --pl: auto;
  --pr: auto;

  @include abs(
    $t: var(--pt),
    $b: var(--pb),
    $l: var(--pl),
    $r: var(--pr),
    $index: var(--index)
  );
}

.fixed {
  --pt: auto;
  --pb: auto;
  --pl: auto;
  --pr: auto;

  @include fix(
    $t: var(--pt),
    $b: var(--pb),
    $l: var(--pl),
    $r: var(--pr),
    $index: var(--index)
  );
}
</style>


