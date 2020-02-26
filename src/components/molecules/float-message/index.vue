<template v-bind="message,type,index">
  <TransparentButton :class="$style.button" @click="onDeleteMessage">
    <component
      :is="type"
      :class="[
    $style.container,
    {[$style.open]:isShow},
    {[$style.close]:!isShow},
    ]"
    >
      {{messageText}}
      <IconM type="close" :class="$style.icon" />
    </component>
  </TransparentButton>
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
    id: String
  },
  mounted() {
    this.isShow = false;
    let showTimer = window.setTimeout(() => {
      this.isShow = true;
      window.clearTimeout(showTimer);
    }, 10);

    if (this.autoHide) {
      let autoTimer = window.setTimeout(() => {
        if (this.isShow) {
          this.onDeleteMessage();
        }
        window.clearTimeout(autoTimer);
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
        this.$emit("delete-message", this.id);
        window.clearTimeout(afterAnimeTimer);
      }, 2000);
    }
  },
  components: { TransparentButton, NormalText, ErrorText, WarnText, IconM }
};
</script>
<style lang="scss" module>
.button {
  position: relative;
  width: 100%;
}
.container {
  width: 100%;
  @include p(8px 7px 8px 40px);
  line-height: 2rem;
  opacity: 0;
  text-align: left;
  @include tran(2000ms);
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
