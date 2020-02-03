<template>
  <div :class="$style.modeless">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  name: "BaseModelessContainer",
  mixins: [base]
};
</script>
<style lang="scss" module>
.modeless {
  @include spr($w: var(--w), $h: var(--h), $p: var(--p), $r: var(--r));
  @include bgc(var(--bgc));
  @include abs($t: var(--t), $l: var(--l), $index: $index_xm);
}
</style>


