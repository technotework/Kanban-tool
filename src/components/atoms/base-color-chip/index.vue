<template>
  <StyledBaseColorChip :width="width" :height="height" :color="color" />
</template>

<script>
import StyledBaseColorChip from "./style";

export default {
  name: "BaseColorChip",
  props: {
    width: { type: String },
    height: { type: String },
    color: { type: String }
  },
  components: {
    StyledBaseColorChip
  }
};
</script>
<style lang="scss" module>
.class{

  
}
</style>
