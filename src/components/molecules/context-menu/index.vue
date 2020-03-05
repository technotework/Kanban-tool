<template>
  <ContextMenuContainer ref="container" @click.stop="onMenuTriggerClick">
    <template #button>
      <BaseIcon type="menu" :class="$style.contextMenu" />
    </template>
    <template #menu>
      <ContextMenuList
        v-bind="{ id, menuItems }"
        ref="menuElement"
        :class="[$style.jContextMenuBody, $compose[compose]]"
        @context-menu-click="onMenuItemClick"
        @close="onClose"
      />
    </template>
  </ContextMenuContainer>
</template>

<script>
import Vue from "vue";
import BaseIcon from "@/components/atoms/base-icon/";
import ContextMenuContainer from "@/components/molecules/context-menu-container/";
import ContextMenuList from "@/components/molecules/context-menu-list/";
import base from "@/components/utils/base-mixin";

export default {
  mixins: [base],
  name: "ContextMenu",
  props: {
    id: String,
    compose: String,
    menuItems: { type: Array }
  },
  components: {
    BaseIcon,
    ContextMenuContainer,
    ContextMenuList
  },
  methods: {
    onMenuTriggerClick(e) {
      //クリックした時あとのnextTickで位置のスタイルを動的に付与
      if (this.compose == "top") {
        Vue.nextTick(() => {
          if (this.$refs.menuElement != undefined) {
            let height = this.$refs.menuElement.$el.clientHeight + 23;
            let className = this.$style.jContextMenuBody;
            let element = document.getElementsByClassName(className);
            element[0].style.marginTop = `-${height}px`;
          }
        });
      }
    },
    onClose() {
      this.$refs.container.onClose();
    },
    onMenuItemClick: function(...args) {
      this.$emit("context-menu-click", ...args);
      this.$refs.container.onClose();
    }
  }
};
</script>
<style lang="scss" module>
.contextMenu {
  fill: #9d9fa2;
  display: block;
  width: 20px;
  height: 20px;
  &:hover {
    fill: #9d9fa2;
  }
}
.jContextMenuBody {
  /*js参照用*/
  display: block;
}
</style>

<style lang="scss" module="$compose">
.bottom {
  @include abs($t: 30px, $l: 0);
}
.top {
  position: absolute;
  margin-left: -48px;
}
</style>
