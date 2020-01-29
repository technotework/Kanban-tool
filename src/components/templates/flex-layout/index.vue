<template>
  <StyledFlexLayout :width="width" :height="height" :wrap="wrap">
    <slot />
  </StyledFlexLayout>
</template>

<script>
import Vue from "vue";
import StyledFlexLayout from "./style";

export default {
  name: "FlexLayout",
  props: {
    wrap: String,
    width: String,
    height: String
  },
  components: { StyledFlexLayout }
};
</script>

