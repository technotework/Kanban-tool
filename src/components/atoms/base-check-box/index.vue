<template>
  <input type="checkbox" :id="id" :class="$style.cb" :value="value" v-model="modelData" />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  model: {
    prop: "model",
    event: "input"
  },
  name: "BaseCheckBox",
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
        this.$emit("input", value);
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss" module>
.cb {
  @include m(0 $s4 $s8 0);
}
</style>
