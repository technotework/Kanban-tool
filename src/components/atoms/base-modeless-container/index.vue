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
import StyledBaseModelessContainer from "./style";
export default {
  name: "BaseModelessContainer",
  props: {
    width: { type: String },
    height: { type: String },
    index: { type: Number },
    top: { type: String },
    left: { type: String }
  },
  components: { StyledBaseModelessContainer }
};
</script>

