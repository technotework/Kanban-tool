<template>
  <div :class="[$style.icon,$compose[compose]]" :img="img" :style="backgroundImage">
    <slot />
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  name: "base-image-icon",
  mixins: [base],
  props: {
    img: String,
    compose: String
  },
  computed: {
    backgroundImage: function() {
      return `background-image: url(${this.img});`;
    }
  }
};
</script>
<style lang="scss" module>
.icon {
  background-position: center center;
  background-repeat: no-repaet;
  overflow: hidden;
  background-size: cover;
  display: inline-block;
  background-color: #3f4247;
}
</style>
<style lang="scss" module="$compose">
.xl {
  @include imageIcon("XL");
}
.l {
  @include imageIcon("L");
}
.m {
  @include imageIcon("M");
}
.s {
  @include imageIcon("S");
}
</style>

