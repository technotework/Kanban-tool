<template>
  <img v-bind="{src,alt}" :class="$style.image" :style="styles" />
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
  name: "BaseImage"
};
</script>
<style lang="scss" module>
.image {
  @include spr(var(--w), var(--h), 0, var(--r));
}
</style>

