<template>
  <input
    type="text"
    v-bind="{required,placeholder,maxlength,name}"
    :class="$style.input"
    :style="styles"
    @input="onInput"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    width: { type: String },
    height: { type: String },
    padding: { type: String },
    round: { type: String },
    value: { type: String },
    name: { type: String },
    maxlength: { type: String },
    placeholder: { type: String },
    required: { type: Boolean, default: false }
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--h": this.height,
        "--p": this.padding,
        "--r": this.round
      };
    }
  },
  methods: {
    onInput(arg) {
      this.$emit("input", arg);
    }
  }
};
</script>
<style lang="scss" module>
.input {
  @include bdc($gray);
  @include spr(var(--w), var(--h), var(--p), var(--r));
}
</style>
