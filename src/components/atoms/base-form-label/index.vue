<template>
  <label :for="id">
    <slot />
  </label>
</template>

<script>
export default {
  name: "BaseFormLabel",
  props: {
    id: { type: String }
  }
};
</script>
<style lang="scss" module>
</style>
