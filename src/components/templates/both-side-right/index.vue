<template>
  <StyledBothSideRight :width="width" :right="right">
    <slot />
  </StyledBothSideRight>
</template>

<script>
export default {
  name: "BothSideRight",
  props: {
    width: String,
    right: String
  }
};
</script>
<style lang="scss" module>
</style>


