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
export default {
  name: "BaseText",
  props: {
    padding: String,
    backgroundColor: String,
    color: String,
    width: String,
    minWidth: String
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


