<template>
  <div>
    <SB1 v-model="content" />
  </div>
</template>

<script>
import SB1 from "./Sandbox1";
export default {
  name: "Sandbox2",
  props: {
    value: String
  },
  computed: {
    content: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: {
    SB1
  }
};
</script>

<style lang="scss" module></style>
