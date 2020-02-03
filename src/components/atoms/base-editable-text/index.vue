<template>
  <div :class="$style.editableText" contenteditable="true">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseEditableText",
  props: {
    width: { type: String },
    height: { type: String },
    padding: { type: String }
  }
};
</script>
<style lang="scss" module>
.editableText {
  --w: auto;
  --h: auto;
  --p: $s16;
  @include s($w: var(--w), $h: var(--h));
  @include p(var(--p));
  @include bdc($gray);
}
</style>
