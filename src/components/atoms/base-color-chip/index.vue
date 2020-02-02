<template>
  <div :class="$style.chip" :style="styles" />
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
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