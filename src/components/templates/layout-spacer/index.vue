<template>
  <StyledLayoutSpacer :width="width" :padding="padding" :margin="margin">
    <slot />
  </StyledLayoutSpacer>
</template>

<script>
export default {
  name: "LayoutSpacer",
  props: { width: String, padding: String, margin: String }
};
</script>
<style lang="scss" module>
.class {
}
</style>


