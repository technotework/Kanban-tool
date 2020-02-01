<template>
  <input :class="$style.button" type="button" :value="value" :name="name" @click="onClick" />
</template>

<script>
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
  }
};
</script>
<style lang="scss" module>
.button {
  @include text($f16);
  @include p($t: $s8, $b: $s8, $l: $s16, $r: $s16);
  @include radius($s32);
  @include bg($primary);
  @include s($mw: 120px);
  border: none;
  cursor: pointer;

  &:active {
    @include bg($phover);
  }
}
</style>