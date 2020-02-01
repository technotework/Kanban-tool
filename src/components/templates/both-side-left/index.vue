<template>
  <StyledBothSideLeft :width="width" :left="left">
    <slot />
  </StyledBothSideLeft>
</template>

<script>
import StyledBothSideLeft from "./style";

export default {
  name: "BothSideLeft",
  props: {
    width: String,
    left: String
  },
  components: {
    StyledBothSideLeft
  }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


