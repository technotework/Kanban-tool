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
    onClick: function(e) {
      this.$emit("base-modal-cover-click-event");
    }
  }
};
</script>
<style lang="scss" module>
.cover {
  @include cover;
}
</style>
