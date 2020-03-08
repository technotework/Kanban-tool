<template>
  <div :class="$style.board">
    <ClickToEditableInput v-model.lazy="titleData" :class="$style.input" />
    <ContextMenu
      :class="$style.contextMenu"
      @context-menu-click="onMenuClick"
      v-bind="{ menuItems, id }"
      compose="bottom"
    />

    <component :is="taskContainer" :id="id" />
  </div>
</template>

<script>
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import ContextMenu from "@/components/molecules/context-menu/";

export default {
  name: "BoardListItem",
  props: {
    value: String,
    id: String,
    taskContainer: Object
  },
  data: function() {
    return {
      menuItems: [
        {
          value: "ボードを削除",
          name: "delete"
        }
      ]
    };
  },
  computed: {
    titleData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("edited-board-name", { name: value, id: this.id });
      }
    }
  },
  methods: {
    onMenuClick: function(value) {
      value.title = this.titleData;
      this.$emit("context-menu-click", value);
    }
  },
  components: {
    ClickToEditableInput,
    ContextMenu
  }
};
</script>
<style lang="scss" module>
.board {
  position: relative;
  height: 100%;
  @include board;
}

.board > div:first-child {
  grid-template-columns: 1fr 48px;
  height: 32px;
}

.input {
  padding: 0 45px 0 16px;
  height: 35px;
}

.input input {
  @include boardText;
}

.input a {
  margin-top: 5px;
  padding-top: 8px;
  width: 40px;
  height: 27px;
}

.contextMenu {
  position: absolute;
  top: 9px;
  right: 14px;
}
.contextMenu svg {
  fill: $theme;
}
</style>
