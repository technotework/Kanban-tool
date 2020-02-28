<template>
  <input type="checkbox" :class="$style.cb" v-bind="{ id, name,value }" v-model="modelData" />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  model: {
    prop: "model",
    event: "change"
  },
  name: "BaseCheckBox",
  props: {
    id: String,
    name: String,
    value: String,
    model: Boolean
  },
  data: () => {
    return {};
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
  methods: {}
};
</script>
<style lang="scss" module>
.cb {
  @include m(0 $s4 $s8 0);
}
</style>
