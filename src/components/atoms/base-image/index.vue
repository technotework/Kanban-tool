<template>
  <img v-bind="{src,alt}" :class="$style.image" />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseImage",
  props: {
    src: String,
    alt: String
  }
};
</script>
<style lang="scss" module>
.image {
  @include spr(var(--w), var(--h), 0, var(--r));
}
</style>

