<template>
  <div :class="$style.chip" :color="color" :style="backgroundColor" />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseColorChip",
  props: {
    color: String
  },
  computed: {
    backgroundColor: function() {
      return `background-color:${this.color};`;
    }
  }
};
</script>
<style lang="scss" module>
.chip {
  @include s($w: 200px, $h: 200px);
}
</style>
