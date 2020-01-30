<template>
  <StyledBaseButton type="button" :value="value" :name="name" @click="onClick" />
</template>

<script>
import StyledBaseButton from "./style";

export default {
  name: "BaseButton",
  props: {
    value: { type: String },
    name: { type: String }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  },
  components: { StyledBaseButton }
};
</script>
