<template>
  <div :class="$style.editableText" :style="styles" contenteditable="true">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseEditableText",
  props: {
    width: { type: String },
    height: { type: String },
    padding: { type: String }
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--h": this.height,
        "--p": this.padding
      };
    }
  }
};
</script>
<style lang="scss" module>
.editableText {
  --w: auto;
  --h: auto;
  --p: $s16;
  width: var(--w);
  height: var(--h);
  padding: var(--p);
  @include bdc($gray);
}
</style>
