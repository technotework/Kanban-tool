<template>
  <div>
    <label :for="target" :class="[$style.label,(value == model)?$style.active:$style.deactive]">
      <input
        :class="$style.radio"
        type="radio"
        :name="name"
        :id="target"
        :value="value"
        :checked="value == model"
        @change="$emit('change',value)"
      />
      <slot />
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
  display: block;
  width: 100%;
  height: 35px;
  padding: $s4;
  text-align: center;
  border-radius: $round $round 0 0;
}
.active {
  @include bgc($primary);
}
.deactive {
  @include bgc($secondary);
}
</style>


