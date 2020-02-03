<template>
  <div :class="$style.cover" @click="onClick">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseModalCover",
  methods: {
    onClick: function() {
      this.$emit("base-modal-cover-click-event");
    }
  }
};
</script>
<style lang="scss" module>
.cover {
  width: 100vw;
  height: 100vh;
  @include bgc($coverbg);
  @include fix($t: 0, $l: 0, $index: $index_h);
}
</style>


