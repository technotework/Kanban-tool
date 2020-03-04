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
import {
  IconL,
  IconM,
  IconS
} from "@/components/atoms/base-image-icon/compose";
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
    IconM
  }
};
</script>
<style lang="scss" module>
.iconText {
  @include flex;
}
.text {
  @include text($f16);
  display: inline-block;
  padding: 1rem;
  margin-top: 2px;
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

