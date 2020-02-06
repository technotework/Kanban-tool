<template>
  <a :class="[$style.button, $compose[compose]]" @click.prevent="onClick">
    <slot />
  </a>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseNoLinkButton",
  props: {},
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" module>
.button {
  display: block;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  @include text($f16);
  @include p($s8 $s16);
  @include r($s32);
  border: none;
  cursor: pointer;
  @include bgc($gray);
  color: $black;
  &:active {
    @include bgc($lightGray);
  }
  user-select: none;
}
</style>

<style lang="scss" module="$compose">
.primary {
  @include bgc($primary);
  &:active {
    @include bgc($phover);
  }
}
.secondary {
  @include bgc($secondary);
  &:active {
    @include bgc($shover);
  }
}
.transparent {
  display: inline-block;
  @include r(0);
  @include p(0);
  @include bgc($transparent);
  &:active {
    @include bgc($transparent);
  }
}
.text {
  @extend .transparent;
  @include p($s8);
  &:active {
    @include c($primary);
  }
}
</style>
