<template>
  <img v-bind="{src,alt}" :class="$style.image" :style="styles" />
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    src: String,
    round: String,
    width: String,
    height: String,
    alt: String
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--h": this.height,
        "--r": this.round
      };
    }
  }
};
</script>
<style lang="scss" module>
.image {
  --w: auto;
  --h: auto;
  --r: 0;

  @include spr(var(--w), var(--h), 0, var(--r));
}
</style>

