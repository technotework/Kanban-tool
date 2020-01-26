<template>
  <StyledBaseFormLabel :for="val">
    <slot />
  </StyledBaseFormLabel>
</template>

<script>
import StyledBaseFormLabel from "./style";

export default {
  name: "BaseFormLabel",
  props: {
    val: { type: String }
  },
  components: {
    StyledBaseFormLabel
  }
};
</script>