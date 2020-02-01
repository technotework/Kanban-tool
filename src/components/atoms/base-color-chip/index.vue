<template>
  <div :class="$style.chip" :style="styles" />
</template>

<script>
export default {
  name: "BaseColorChip",
  props: {
    width: { type: String },
    height: { type: String },
    color: { type: String }
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--h": this.height,
        "--c": this.color
      };
    }
  }
};
</script>
<style lang="scss" module>
.chip {
  --w: auto;
  --h: auto;
  width: var(--w);
  height: var(--h);
  background-color: var(--c);
}
</style>