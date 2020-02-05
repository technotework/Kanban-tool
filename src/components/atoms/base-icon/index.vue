<template>
  <svg :type="type" :class="[$style.icon, $compose[compose]]" :fill="fill">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="icon"></use>
  </svg>
</template>

<script>
import base from "@/components/utils/base-mixin";
import { getIcon } from "./icons";
import IconSprite from "@/assets/svg/sprite.svg";

export default {
  name: "BaseImageIcon",
  mixins: [base],
  props: {
    type: String,
    fill: String
  },
  computed: {
    icon: function() {
      return `${IconSprite}#${this.type}`;
    }
  }
};
</script>
<style lang="scss" module>
.icon {
  @include r(0);
}
</style>
<style lang="scss" module="$compose">
.normal {
  @include s($w: 200px, $h: 200px);
}
.l {
  @include s($w: 30px, $h: 30px);
}
.m {
  @include s($w: 20px, $h: 20px);
}
.s {
  @include s($w: 15px, $h: 15px);
}
</style>
