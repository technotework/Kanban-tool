<template>
  <div :class="$style.editableText" :style="styles" contenteditable="true">
    <slot />
  </div>
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
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
  @include pd(var(--p));
  @include bdc($gray);
}
</style>
