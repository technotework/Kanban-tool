<template>
  <StyledLayoutPositioner
    :width="width"
    :top="top"
    :left="left"
    :right="right"
    :bottom="bottom"
    :position="position"
  >
    <slot />
  </StyledLayoutPositioner>
</template>

<script>
export default {
  name: "LayoutPositioner",
  props: {
    position: String,
    width: String,
    top: String,
    bottom: String,
    left: String,
    right: String
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


