<template>
  <PrimaryButton @click="onClick" :class="$style.button">
    <BaseIcon :type="type" :class="$style.icon" />
  </PrimaryButton>
</template>

<script>
import IconedText from "@/components/molecules/iconed-text/";
import { PrimaryButton } from "@/components/atoms/base-no-link-button/compose";
import BaseIcon from "@/components/atoms/base-icon/";
import base from "@/components/utils/base-mixin";
export default {
  name: "IconedTextButton",
  mixins: [base],
  props: {
    type: { type: String }
  },
  components: {
    BaseIcon,
    PrimaryButton
  }
};
</script>
<style lang="scss" module>
.button {
  height: 1.7rem;
  @include p(0);
}
.icon {
  display: block;
  fill: $white;
  @include s($w: 12px, $h: auto);
  @include p(2px 0 0 0);
  @include m(0 auto);
}
</style>
