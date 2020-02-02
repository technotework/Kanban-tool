<template>
  <div :class="$style.spacer" :style="styles">
    <slot />
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
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


