<template>
  <StyledBaseFormLabel :for="id">
    <slot />
  </StyledBaseFormLabel>
</template>

<script>
import StyledBaseFormLabel from "./style";

export default {
  name: "BaseFormLabel",
  props: {
    id: { type: String }
  },
  components: {
    StyledBaseFormLabel
  }
};
</script>