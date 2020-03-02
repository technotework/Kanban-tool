<template>
  <div :class="[$style.iconText,$compose[compose]]">
    <components :is="icon" :img="img" :class="$style.icon" />
    <BaseText :class="$style.text">
      <slot />
    </BaseText>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import {
  IconL,
  IconM,
  IconS
} from "@/components/atoms/base-image-icon/compose";
import BaseText from "@/components/atoms/base-text/";
export default {
  mixins: [base],
  name: "ImageIconedText",
  props: {
    size: String,
    img: String,
    compose: String
  },
  computed: {
    icon() {
      return "Icon" + this.size;
    }
  },
  components: {
    IconS,
    IconL,
    IconM,
    BaseText
  }
};
</script>
<style lang="scss" module>
.iconText {
  @include flex;
}
.icon {
  fill: $theme;
}
.text {
  display: inline-block;
  @include p(1rem);
  @include text($f16);
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

