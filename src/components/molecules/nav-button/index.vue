<template>
  <TransparentButton @click="onClick" :class="$style.container">
    <div :class="$style.label">
      <slot />
    </div>
    <BaseIcon type="dot" :class="$style.icon" />
  </TransparentButton>
</template>

<script>
import BaseIcon from "@/components/atoms/base-icon/";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";
import { AddMiniButton } from "@/components/atoms/base-no-link-button/compose";
import base from "@/components/utils/base-mixin";
export default {
  name: "NavButton",
  mixins: [base],
  props: {
    type: String,
    compose: String
  },
  components: {
    TransparentButton,
    BaseIcon
  }
};
</script>
<style lang="scss" module>
.container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 24px;
}
.label {
  display: inline-block;
  padding: 0 5px 5px 5px;
  @include nav;
}
.icon {
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: block;
  width: 91px;
  height: 10px;
  fill: $white;
}
</style>


