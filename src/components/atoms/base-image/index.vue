<template>
  <img v-bind="{src,width,height,alt}" />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseImage",
  props: {
    src: String,
    alt: String,
    width: String,
    height: String
  }
};
</script>
<style lang="scss" module>
</style>

