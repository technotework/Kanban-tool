<template>
  <div :class="$style.flex">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "FlexLayout"
};
</script>
<style lang="scss" module>
.flex {
  @include flex;
}
</style>


