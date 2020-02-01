<template>
  <StyledBaseModalContainer
    :width="width"
    :minHeight="minHeight"
    :top="top"
    :left="left"
    :index="index"
  >
    <slot />
  </StyledBaseModalContainer>
</template>

<script>
export default {
  name: "BaseModalContainer",
  props: {
    width: { type: String },
    minHeight: { type: String },
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


