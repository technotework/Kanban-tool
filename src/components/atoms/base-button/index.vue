<template>
  <input
    :class="[$style.button,$compose[compose]]"
    type="button"
    v-bind="{value,name,compose}"
    @click="onClick"
  />
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "BaseButton",
  props: {
    value: String,
    name: String,
    compose: String
  }
};
</script>

<style lang="scss" module>
.button {
  @include text($f16);
  @include p($s4 $s8 $s4 $s8);
  @include r($s4);
  @include s($mw: 120px);
  @include bgc($gray);

  border: none;
  cursor: pointer;

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
.menu {
  @include bgc($menu);
  &:active {
    @include bgc($mhover);
  }
  text-align: left;
  @include p($s4);
  @include r(0);
  @include text($f16);
}
</style>