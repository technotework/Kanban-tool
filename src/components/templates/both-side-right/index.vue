<template>
  <StyledBothSideRight :width="width" :right="right">
    <slot />
  </StyledBothSideRight>
</template>

<script>
import StyledBothSideRight from "./style";
export default {
  name: "BothSideRight",
  props: {
    width: String,
    right: String
  },
  components: { StyledBothSideRight }
};
</script>

