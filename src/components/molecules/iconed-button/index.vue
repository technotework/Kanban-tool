<template>
  <PrimaryButton @click="onClick" :class="$style.button">
    <IconS :type="type" :class="$style.icon" />
  </PrimaryButton>
</template>

<script>
import IconedText from "@/components/molecules/iconed-text/";
import { PrimaryButton } from "@/components/atoms/base-no-link-button/compose";
import { IconS } from "@/components/atoms/base-icon/compose";
import base from "@/components/utils/base-mixin";
export default {
  name: "IconedTextButton",
  mixins: [base],
  props: {
    type: { type: String }
  },
  components: {
    IconS,
    PrimaryButton
  }
};
</script>
<style lang="scss" module>
.button {
  height: 2.5rem;
}
.icon {
  fill: $white;
}
</style>
