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
  @include spr($w: 270px, $h: auto, $p: $s16 0, $r: $round);
  @include bgc($lightGray);
  display: flex;
  flex-direction: column;
}
.input {
  @include m(2.4rem 1.6rem 1.2rem 1.6rem);
}

.contextMenu {
  @include abs($t: $s12, $r: 2.2rem);
  flex: 1;
}
</style>
