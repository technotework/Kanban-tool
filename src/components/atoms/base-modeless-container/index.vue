<template>
  <StyledBaseModelessContainer
    :width="width"
    :height="height"
    :top="top"
    :left="left"
    :index="index"
  >
    <slot />
  </StyledBaseModelessContainer>
</template>

<script>
export default {
  name: "BaseModelessContainer",
  props: {
    width: { type: String },
    height: { type: String },
    index: { type: Number },
    top: { type: String },
    left: { type: String }
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


