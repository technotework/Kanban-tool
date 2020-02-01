<template>
  <StyledHolyGrailContainer :width="width" :height="height">
    <slot />
  </StyledHolyGrailContainer>
</template>

<script>
import StyledHolyGrailContainer from "./style";
export default {
  name: "HolyGrailContainer",
  props: { width: String, height: String },
  components: {
    StyledHolyGrailContainer
  }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


