<template>
  <div :class="[$style.iconText,$compose[compose]]">
    <BaseIcon :type="type" :class="$style.icon" />
    <span :class="$style.text">
      <slot />
    </span>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import BaseIcon from "@/components/atoms/base-icon/";
export default {
  mixins: [base],
  name: "IconedText",
  props: {
    type: { type: String }
  },
  components: {
    BaseIcon
  }
};
</script>
<style lang="scss" module>
.iconText {
  @include flex;
}
.icon {
  width: 20px;
  height: 20px;
  fill: $theme;
}
.text {
  display: inline-block;
  @include p(0.2rem 0.5rem);
  @include text($f18);
  min-width: auto;
  user-select: none;
}
</style>
<style lang="scss" module="$compose">
.right {
  flex-direction: row-reverse;
}
.left {
  flex-direction: row;
}
</style>

