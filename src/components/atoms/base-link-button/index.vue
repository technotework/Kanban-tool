<template>
  <a
    v-bind="{href,target,compose}"
    :class="[$style.button,$compose[compose]]"
    :style="styles"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "BaseLinkButton",
  props: {
    href: String,
    target: String,
    compose: String,
    width: String,
    height: String
  },
  computed: {
    styles() {
      return {
        "--w": this.width,
        "--h": this.height
      };
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
  @include p($t: $s8, $b: $s8, $l: $s16, $r: $s16);
  @include r($s32);
  @include s($w: var(--w), $h: var(--h));
  border: none;
  cursor: pointer;
  @include bg($gray);
  color: $black;
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

