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
  word-wrap: break-word;
  vertical-align: top;
}
</style>

<style lang="scss" module="$compose">
.error {
  @include error;
}
</style>

