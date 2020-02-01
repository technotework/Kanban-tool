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
import StyledLayoutPositioner from "./style";

export default {
  name: "LayoutPositioner",
  props: {
    position: String,
    width: String,
    top: String,
    bottom: String,
    left: String,
    right: String
  },
  components: {
    StyledLayoutPositioner
  }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


