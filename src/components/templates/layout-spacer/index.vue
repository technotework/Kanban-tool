<template>
  <StyledLayoutSpacer :width="width" :padding="padding" :margin="margin">
    <slot />
  </StyledLayoutSpacer>
</template>

<script>
import StyledLayoutSpacer from "./style";
export default {
  name: "LayoutSpacer",
  props: { width: String, padding: String, margin: String },
  components: { StyledLayoutSpacer }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


