<template>
  <div :class="$style.chip" />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseColorChip"
};
</script>
<style lang="scss" module>
.chip {
  width: var(--w);
  height: var(--h);
  background-color: var(--bgc);
}
</style>