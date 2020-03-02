<template>
  <BaseFormLabel :target="id" :class="$style.label">
    <BaseCheckBox v-bind="{id,name,value}" v-model="modelData" :class="$style.checkbox" />
    <slot />
  </BaseFormLabel>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseFormLabel from "@/components/atoms/base-form-label/";
import BaseCheckBox from "@/components/atoms/base-check-box/";
export default {
  mixins: [base],
  model: {
    prop: "model",
    event: "change"
  },
  name: "LabeledCheckbox",
  props: {
    id: String,
    name: String,
    value: String,
    model: Boolean
  },
  computed: {
    modelData: {
      get() {
        return this.model;
      },
      set(value) {
        this.$emit("change", value);
      }
    }
  },
  methods: {},
  components: {
    BaseFormLabel,
    BaseCheckBox
  }
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
