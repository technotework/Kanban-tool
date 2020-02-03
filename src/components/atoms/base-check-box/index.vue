<template>
  <input
    type="checkbox"
    :class="$style.cb"
    v-bind="{ id, name, value }"
    @change="onChange"
  />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseCheckBox",
  props: {
    id: { type: String },
    name: { type: String },
    value: { type: String }
  }
};
</script>
<style lang="scss" module>
.cb {
  @include m(0 $s4 $s8 0);
}
</style>
