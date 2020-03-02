<template>
  <div @click.stop="onMenuTriggerClick">
    <TransparentButton>
      <slot name="button" />
    </TransparentButton>
    <template v-if="showContext">
      <slot name="menu" />
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "ContextMenuContainer",
  props: {},
  data: function() {
    return {
      showContext: false
    };
  },
  components: {
    TransparentButton
  },
  methods: {
    onMenuTriggerClick(e) {
      this.showContext = !this.showContext;

      //クリックした時あとのnextTickで位置のスタイルを動的に付与
      if (this.showContext && this.compose == "top") {
        Vue.nextTick(() => {
          let height = this.$refs.menuElement.$el.clientHeight;
          let className = this.$style.contextMenuBody;
          let element = document.getElementsByClassName(className);
          element[0].style.top = `-${height}px`;
        });
      }
    },
    onClose: function(e) {
      this.showContext = !this.showContext;
    }
  }
};
</script>
<style lang="scss" module>
</style>
