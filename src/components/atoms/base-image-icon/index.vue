<template>
  <div :class="[$style.icon,$compose[compose],$shape[shape]]" :img="img" :style="backgroundImage">
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
    compose: String,
    shape: String
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
}
</style>
<style lang="scss" module="$compose">
.normal {
  @include s($w: 300px, $h: 300px);
}
.l {
  @include s($w: 200px, $h: 200px);
  @include bgc($lightGray);
}
.m {
  @include s($w: 50px, $h: 50px);
  @include bgc($lightGray);
}
.s {
  @include s($w: 27px, $h: 27px);
  @include bgc($lightGray);
}
.w100 {
  @include s($w: 100px, $h: 100px);
}
</style>

<style lang="scss" module="$shape">
.round {
  @include r(300px);
}
.square {
  @include r(0);
}
</style>
