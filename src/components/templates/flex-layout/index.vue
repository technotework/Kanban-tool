<template>
  <div :class="$style.flex" :style="styles">
    <slot />
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
  name: "FlexLayout"
};
</script>
<style lang="scss" module>
.flex {
  @include s(var(--w), var(--h));
  @include flex;
}
</style>


