<template>
  <StyledBaseModalCover :index="index" :backgroundColor="backgroundColor" @click="onClick">
    <slot />
  </StyledBaseModalCover>
</template>

<script>
import StyledBaseModalCover from "./style";
export default {
  name: "BaseModalCover",
  props: {
    index: { type: Number },
    backgroundColor: { type: String }
  },
  methods: {
    onClick(e) {
      this.$emit("base-modal-cover-click-event", e);
    }
  },
  components: { StyledBaseModalCover }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


