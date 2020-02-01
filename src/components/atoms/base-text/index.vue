<template>
  <StyledBaseText
    :padding="padding"
    :backgroundColor="backgroundColor"
    :width="width"
    :minWidth="minWidth"
    :color="color"
  >
    <slot />
  </StyledBaseText>
</template>

<script>
import StyledBaseText from "./style";
export default {
  name: "BaseText",
  props: {
    padding: String,
    backgroundColor: String,
    color: String,
    width: String,
    minWidth: String
  },
  components: { StyledBaseText }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


