<template>
  <BaseFormLabel :for="id">
    <BaseCheckBox v-bind="{id,name,value}" @change="onChange" />
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
  components: {
    BaseFormLabel,
    BaseCheckBox
  }
};
</script>
<style lang="scss" module>
</style>
