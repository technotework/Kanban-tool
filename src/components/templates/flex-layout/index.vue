<template>
  <StyledFlexLayout :width="width" :height="height" :wrap="wrap" :justify="justify">
    <slot />
  </StyledFlexLayout>
</template>

<script>
import Vue from "vue";

export default {
  name: "FlexLayout",
  props: {
    justify: String,
    wrap: String,
    width: String,
    height: String
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


