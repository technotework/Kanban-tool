<template>
  <div :class="$style.modeless">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  name: "BaseModelessContainer",
  mixins: [base]
};
</script>
<style lang="scss" module>
.modeless {
  @include s($w: 150px, $h: "auto");
  @include bgc($lightGray);
}
</style>


