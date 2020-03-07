<template>
  <div :class="[$style.iconText,$compose[compose]]">
    <components :is="icon" :img="img" :class="$style.icon" />
    <span :class="$style.text">
      <slot />
    </span>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import { IconS, IconM } from "@/components/atoms/base-image-icon/compose";
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
    IconM
  }
};
</script>
<style lang="scss" module>
.iconText {
  @include flex;
  align-items: center;
}
.text {
  @include userNameText;
  margin: 0 0 1px $s12;
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

