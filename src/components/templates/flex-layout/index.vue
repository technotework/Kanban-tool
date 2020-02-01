<template>
  <StyledFlexLayout :width="width" :height="height" :wrap="wrap" :justify="justify">
    <slot />
  </StyledFlexLayout>
</template>

<script>
import Vue from "vue";
import StyledFlexLayout from "./style";

export default {
  name: "FlexLayout",
  props: {
    justify: String,
    wrap: String,
    width: String,
    height: String
  },
  components: { StyledFlexLayout }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>


