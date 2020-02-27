<template>
  <BaseFormLabel :target="id">
    <BaseCheckBox v-bind="{id,name,value}" @change="onCBChange" />
    <slot />
  </BaseFormLabel>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseFormLabel from "@/components/atoms/base-form-label/";
import BaseCheckBox from "@/components/atoms/base-check-box/";
export default {
  mixins: [base],
  name: "LabeledCheckbox",
  props: {
    id: String,
    name: String,
    value: String
  },
  methods: {
    onCBChange(value) {
      this.$emit("change", value);
    }
  },
  components: {
    BaseFormLabel,
    BaseCheckBox
  }
};
</script>
<style lang="scss" module>
</style>
