<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "HolyGrailContainer"
};
</script>
<style lang="scss" module>
.container {
  position: relative;
  @include s($w: $vw100, $h: auto);
}
</style>


