<template>
  <span :class="[$style.text,$compose[compose]]">
    <slot />
  </span>
</template>

<script>
import base from "@/components/utils/base-mixin";
export default {
  mixins: [base],
  name: "BaseText"
};
</script>

<style lang="scss" module>
.text {
  @include s($mw: 300px);
  word-wrap: break-word;
  vertical-align: top;
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
  @include p($s4);
  @include bgc($error);
}
.warn {
  display: inline-block;
  @include p($s4);
  @include bgc($warn);
}
.normal {
  display: inline-block;
  @include p($s4);
  @include bgc($normal);
}
</style>

