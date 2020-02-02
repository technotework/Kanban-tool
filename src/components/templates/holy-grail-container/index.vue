<template>
  <div :class="$style.container" :style="styles">
    <slot />
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
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


