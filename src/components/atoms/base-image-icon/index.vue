<template>
  <div class="base-icon">
    <div :class="[$style.icon,$compose[compose],$shape[shape]]" :img="img" :style="backgroundImage">
      <slot />
    </div>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";

export default {
  name: "BaseIcon",
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
}
</style>
<style lang="scss" module="$compose">
.normal {
  @include s($w: 300px, $h: 300px);
}
.l {
  @include s($w: 200px, $h: 200px);
}
.m {
  @include s($w: 150px, $h: 150px);
}
.s {
  @include s($w: 100px, $h: 100px);
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
