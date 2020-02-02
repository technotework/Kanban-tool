<template>
  <input
    :class="[$style.button,$compose[compose]]"
    :style="styles"
    type="button"
    v-bind="{value,name,compose}"
    @click="onClick"
  />
</template>

<script>
import styles from "@/components/utils/styles-mixin";

export default {
  mixins: [styles],
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
  @include p($s8 $s16 $s8 $s16);
  @include r($s32);
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
  @include spr($w: var(--w), $p: $s4, $r: 0);
  @include text($f16);
}
</style>