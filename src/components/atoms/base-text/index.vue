<template>
  <StyledBaseText>
    <slot />
  </StyledBaseText>
</template>

<script>
import StyledBaseText from "./style";
export default {
  name: "BaseText",
  props: {},
  components: { StyledBaseText }
};
</script>

