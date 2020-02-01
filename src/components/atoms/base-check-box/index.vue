<template>
  <input type="checkbox" :class="$style.cb" :id="id" :name="name" :value="value" @change="onInput" />
</template>

<script>
export default {
  name: "BaseCheckBox",
  props: {
    id: { type: String },
    name: { type: String },
    value: { type: String }
  },
  methods: {
    onInput(e) {
      this.$emit("change", e.target.value);
    }
  }
};
</script>
<style lang="scss" module>
.cb {
  @include m($r: $s4, $b: $s8);
}
</style>