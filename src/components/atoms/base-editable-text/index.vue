<template>
  <div :class="$style.editableText" contenteditable="true">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseEditableText"
};
</script>
<style lang="scss" module>
.editableText {
  @include s($w: $vw100, $h: 200px);
  @include bdc($gray);
  @include p($s8);
}
</style>
