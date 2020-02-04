<template>
    <div :class="[$style.icon,$compose[compose]]" :type="type" :style="backgroundImage">
      <slot />
    </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import {getIcon} from "./icons"

export default {
  name: "BaseImageIcon",
  mixins: [base],
  props: {
    type: String,
  },
  computed: {
    backgroundImage: function() {
      
      let img = getIcon(this.type);
      return `background-image: url(${img});`;
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
  @include r(0);
}
</style>
<style lang="scss" module="$compose">
.normal {
  @include s($w: 20px, $h: 20px);
  
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
