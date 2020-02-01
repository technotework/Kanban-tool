<template>
  <div class="base-icon">
    <div :class="$style.icon" :style="styles">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    src: String,
    round: String,
    width: String,
    height: String
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--h": this.height,
        "--r": this.round,
        "--src": `url("${this.src}")`
      };
    }
  }
};
</script>
<style lang="scss" module>
.icon {
  --w: auto;
  --h: auto;
  --r: 100px;
  --src: "";

  @include s($w: var(--w), $h: var(--h));
  @include r(var(--r));
  @include bgi(var(--src));
}
</style>

