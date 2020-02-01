<template>
  <input
    :class="[$style.button,$compose[compose]]"
    type="button"
    v-bind="{value,name,compose}"
    @click="onClick"
  />
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    value: String,
    name: String,
    compose: String
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
  @include r($s32);
  @include s($mw: 120px);
  border: none;
  cursor: pointer;
  @include bg($gray);
  &:active {
    @include bg($lightGray);
  }
}
</style>

<style lang="scss" module="$compose">
.primary {
  @include bg($primary);
  &:active {
    @include bg($phover);
  }
}
.secondary {
  @include bg($secondary);
  &:active {
    @include bg($shover);
  }
}
</style>