<template>
  <input type="text" v-model="localVal" id="" :readonly="readonly" />
</template>

<script>
export default {
  name: "InputA",
  data: function() {
    return {};
  },
  computed: {
    localVal: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  props: {
    value: String,
    readonly: Boolean
  }
};
</script>

<style lang="scss" module></style>
