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
  @include spr($w: 150px, $h: "auto", $p: 0, $r: $round);
  @include bgc($lightGray);
}
</style>


