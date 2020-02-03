<template>
  <label for="id">
    <slot />
  </label>
</template>

<script>
export default {
  name: "BaseFormLabel",
  props: {
    for: { type: String }
  }
};
</script>
<style lang="scss" module>
</style>
