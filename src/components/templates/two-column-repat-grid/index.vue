<template>
  <div :class="$style.grid">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "TwoColumnRepeatGrid",
  props: {}
};
</script>
<style lang="scss" module>
.grid {
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: 36px;
}
</style>


