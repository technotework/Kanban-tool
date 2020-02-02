<template>
  <a
    v-bind="{compose,href,target}"
    :class="[$style.button,$compose[compose]]"
    :style="styles"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
  name: "BaseLinkButton",
  props: {
    compose: String,
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
  @include s($w: var(--w), $h: var(--h));
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

