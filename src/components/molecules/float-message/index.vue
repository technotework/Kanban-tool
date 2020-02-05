<template>
  <div :is="type" :type="type" :message="message" :class="$style.message">
    {{messageText}}
    <TransparentButton @click="onClick">
      <IconM type="close" :class="$style.icon" />
    </TransparentButton>
  </div>
</template>

<script>
import base from "@/components/utils/base-mixin";
import {
  ErrorText,
  WarnText,
  NormalText
} from "@/components/atoms/base-text/compose";
import { IconM } from "@/components/atoms/base-icon/compose";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";

export default {
  mixins: [base],
  name: "FloatMessage",
  props: {
    type: String,
    message: String
  },
  computed: {
    messageText: function() {
      return this.message;
    }
  },
  components: { TransparentButton, NormalText, ErrorText, WarnText, IconM }
};
</script>
<style lang="scss" module>
.message {
  position: relative;
  width: 100%;
  @include p(8px 7px 8px 40px);
  line-height: 2rem;
}
.icon {
  @include abs($t: 9px, $l: 8px);
  fill: $white;
}
</style>
