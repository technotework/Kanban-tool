<template>
  <div>
    <label :for="target" :class="[(value == model)?$style.active:$style.deactive]">
      <input
        :class="$style.radio"
        type="radio"
        :name="name"
        :id="target"
        :value="value"
        :checked="value == model"
        @change="$emit('change',value)"
      />
      <span :class="$style.label">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  name: "BaseButtonRadio",
  mixins: [base],
  model: {
    prop: "model",
    event: "change"
  },
  props: {
    target: String,
    name: String,
    value: String,
    model: String
  },
  methods: {},

  components: {}
};
</script>
<style lang="scss" module>
.radio {
  display: none;
}
.label {
  display: inline-block;
  margin: 0 22px;
}
.active {
  @include primaryTab;
}
.deactive {
  @include secondaryTab;
}
</style>


