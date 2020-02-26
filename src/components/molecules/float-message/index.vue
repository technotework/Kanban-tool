<template v-bind="message,type,index">
  <component
    :is="type"
    :class="[
    $style.container,
    {[$style.open]:isShow},
    {[$style.close]:!isShow},
    ]"
  >
    {{messageText}}
    <TransparentButton @click="onDeleteMessage">
      <IconM type="close" :class="$style.icon" />
    </TransparentButton>
  </component>
</template>

<script>
import Vue from "vue";
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
    message: String,
    index: Number
  },
  mounted() {
    this.isShow = false;
    let showTimer = window.setTimeout(() => {
      this.isShow = true;
      clearTimeout(showTimer);
    }, 100);

    if (this.autoHide) {
      let autoTimer = window.setTimeout(() => {
        this.onDeleteMessage();
        clearTimeout(autoTimer);
      }, 5000);
    }
  },
  data: () => {
    return {
      isShow: false,
      autoHide: true
    };
  },
  computed: {
    messageText() {
      return this.message;
    }
  },
  methods: {
    onDeleteMessage() {
      this.isShow = false;
      let afterAnimeTimer = window.setTimeout(() => {
        clearTimeout(afterAnimeTimer);
        this.$emit("delete-message", { index: this.index });
      }, 1000);
    }
  },
  components: { TransparentButton, NormalText, ErrorText, WarnText, IconM }
};
</script>
<style lang="scss" module>
.container {
  position: relative;
  width: 100%;
  @include p(8px 7px 8px 40px);
  line-height: 2rem;
  opacity: 0;
  @include tran($ms1000);
}
.icon {
  @include abs($t: 9px, $l: 8px);
  fill: $white;
}
.open {
  opacity: 1;
}
.close {
  opacity: 0;
}
</style>
