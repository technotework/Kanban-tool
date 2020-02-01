<template>
  <StyledBaseEditableText :width="width" :height="height" :padding="padding" contenteditable="true">
    <slot />
  </StyledBaseEditableText>
</template>

<script>
import StyledBaseEditableText from "./style";

export default {
  name: "BaseEditableText",
  props: {
    width: { type: String },
    height: { type: String },
    padding: { type: String }
  },
  components: {
    StyledBaseEditableText
  }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>
