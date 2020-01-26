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
import StyledBaseModalContainer from "./style";
export default {
  name: "BaseModalContainer",
  props: {
    width: { type: String },
    minHeight: { type: String },
    index: { type: Number },
    top: { type: String },
    left: { type: String }
  },
  components: { StyledBaseModalContainer }
};
</script>

