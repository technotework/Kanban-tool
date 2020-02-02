<template>
  <span :class="[$style.text,$compose[compose]]" :style="styles">
    <slot />
  </span>
</template>

<script>
import styles from "@/components/utils/styles-mixin";
export default {
  mixins: [styles],
  name: "BaseText"
};
</script>
<style lang="scss" module>
.text {
  --mw: auto;
  @include s($mw: var(--mw));
}
</style>

<style lang="scss" module="$compose">
.contents {
  @include text($f16);
}
.caption {
  @include text($f14);
  @include c($darkGray);
}
.error {
  display: inline-block;
  @include pd($s4);
  @include bg($error);
}
.warn {
  display: inline-block;
  @include pd($s4);
  @include bg($warn);
}
.normal {
  display: inline-block;
  @include pd($s4);
  @include bg($normal);
}
</style>

