<template>
  <div :class="$style.modeless" :style="styles">
    <slot />
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  name: "BaseModelessContainer",
  mixins: [styles]
};
</script>
<style lang="scss" module>
.modeless {
  @include spr($w: var(--w), $h: var(--h), $p: var(--p), $r: var(--r));
  @include bg(var(--bgc));
  @include abs($t: var(--t), $l: var(--l), $index: $index_xm);
}
</style>


