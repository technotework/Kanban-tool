<template>
  <label :for="target">
    <slot />
  </label>
</template>

<script>
export default {
  name: "BaseFormLabel",
  props: {
    target: String
  }
};
</script>
