<template>
  <StyledHolyGrailContainer :width="width" :height="height">
    <slot />
  </StyledHolyGrailContainer>
</template>

<script>
export default {
  name: "HolyGrailContainer",
  props: { width: String, height: String }
};
</script>
<style lang="scss" module>
</style>


