<template>
  <div :class="$style.editableText" :contenteditable="contenteditable">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseEditableText",
  props: {
    contenteditable: Boolean
  }
};
</script>
<style lang="scss" module>
.editableText {
  @include s($w: $vw100, $h: 200px);
  @include bdc($gray);
  @include p($s8);
}
</style>
