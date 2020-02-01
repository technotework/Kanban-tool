<template>
  <StyledBothSideLeft :width="width" :left="left">
    <slot />
  </StyledBothSideLeft>
</template>

<script>
export default {
  name: "BothSideLeft",
  props: {
    width: String,
    left: String
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


