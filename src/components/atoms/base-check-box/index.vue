<template>
  <input
    type="checkbox"
    :class="$style.cb"
    v-bind="{ id, name,value }"
    v-model="checked"
    @change="onCBChange"
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
  },
  data: () => {
    return {
      checked: null
    };
  },
  methods: {
    onCBChange(e) {
      this.$emit("change", { value: this.value, checked: this.checked, e: e });
    }
  }
};
</script>
<style lang="scss" module>
.cb {
  @include m(0 $s4 $s8 0);
}
</style>
