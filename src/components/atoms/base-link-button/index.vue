<template>
  <a v-bind="{href,target}" :class="[$style.button,$compose[compose]]">
    <slot />
  </a>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseLinkButton",
  props: {
    href: String,
    target: String
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
</style>

