<template>
  <input v-model.lazy="inputData" type="text" />
</template>

<script>
export default {
  name: "Sandbox1",
  props: {
    value: String
  },
  computed: {
    inputData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>

<style lang="scss" module></style>
