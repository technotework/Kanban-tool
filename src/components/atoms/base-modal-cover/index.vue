<template>
  <div :class="$style.cover" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseModalCover",
  methods: {
    onClick(e) {
      this.$emit("base-modal-cover-click-event", e);
    }
  }
};
</script>
<style lang="scss" module>
.cover {
  width: 100vw;
  height: 100vh;
  @include bg($coverbg);
  @include fix($t: 0, $l: 0, $index: $index_h);
}
</style>


