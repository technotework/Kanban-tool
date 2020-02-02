<template>
  <div :class="$compose[compose]" :style="styles">
    <slot />
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
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


