<template>
  <StyledBaseLinkButton
    :mode="mode"
    :href="href"
    :width="width"
    :target="target"
    :color="color"
    @click="onClick"
  >
    <slot />
  </StyledBaseLinkButton>
</template>

<script>
export default {
  name: "BaseLinkButton",
  props: {
    mode: {
      type: String,
      default: "button"
    },
    width: String,
    href: String,
    target: String,
    color: String
  },
  methods: {
    onClick(e) {
      if (this.mode == "button") {
        this.$emit("click");
        return false;
      }
    }
  }
};
</script>
<style lang="scss" module>
.class {
}
</style>


