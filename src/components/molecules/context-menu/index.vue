<template>
  <div @click.stop="onMenuTriggerClick" :class="$style.wrapper">
    <TransparentButton>
      <BaseIcon compose="m" type="context" :class="$style.contextMenu" />
    </TransparentButton>
    <template v-if="showContext">
      <ContextMenuList
        v-bind="{ id, menuItems }"
        ref="menuElement"
        :class="[$style.contextMenuBody, $compose[compose]]"
        @context-menu-click="onMenuItemClick"
        @close="onClose"
      />
    </template>
  </div>
</template>

<script>
import Vue from "vue";
import BaseIcon from "@/components/atoms/base-icon/";
import ContextMenuList from "@/components/molecules/context-menu-list/";
import { TransparentButton } from "@/components/atoms/base-no-link-button/compose";
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "ContextMenu",
  props: {
    id: String,
    menuItems: { type: Array }
  },
  data: function() {
    return {
      showContext: false
    };
  },
  components: {
    BaseIcon,
    ContextMenuList,
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
    },
    onMenuItemClick: function(...args) {
      this.$emit("context-menu-click", ...args);
    }
  }
};
</script>
<style lang="scss" module>
.wrapper {
}
.contextMenu {
  fill: $darkGray;
  display: block;
  width: 20px;
  height: 20px;
  &:hover {
    fill: $gray;
  }
}
.contextMenuBody {
  color: red;
}
</style>

<style lang="scss" module="$compose">
.bottom {
  @include abs($t: 30px, $l: 0);
}
.top {
  @include abs($l: -116px);
}
</style>
