<template>
  <BaseFormLabel :target="id" :class="$style.label">
    <BaseCheckBoxVModel v-bind="{id,name,value}" v-model="modelData" :class="$style.checkbox" />
    <slot />
  </BaseFormLabel>
</template>
<script>
import { BaseCheckBoxVModel } from "@/components/atoms/base-check-box/compose";
import BaseFormLabel from "@/components/atoms/base-form-label/";
import base from "@/components/utils/base-mixin";
import mixin from "./mixin";
export default {
  mixins: [mixin, base],
  name: "LabeledCheckboxVmodel",
  props: {
    myCompo: BaseCheckBoxVModel,
    model: Array
  },
  components: { BaseFormLabel, BaseCheckBoxVModel }
};
</script>
<style lang="scss" module>
.label {
  display: flex;
  align-items: center;
}
.checkbox {
  padding-right: $s4;
}
</style>
