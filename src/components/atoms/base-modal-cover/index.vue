<template>
  <StyledBaseModalCover :index="index" @click="onClick">
    <slot />
  </StyledBaseModalCover>
</template>

<script>
import StyledBaseModalCover from "./style";
export default {
  name: "BaseModalCover",
  props: {
    index: { type: Number }
  },
  methods: {
    onClick(e) {
      this.$emit("base-modal-cover-click-event", e);
    }
  },
  components: { StyledBaseModalCover }
};
</script>

