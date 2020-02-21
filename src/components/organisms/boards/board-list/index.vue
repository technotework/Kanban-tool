<template>
  <draggable v-model="boardList" :class="$style.list" tag="ul" v-bind="dragOptions">
    <li v-for="boardItem in boardList" :key="boardItem.id" :class="$style.listItem">
      <BoardListItem
        v-model="boardItem.board.label"
        :id="boardItem.board.id"
        @edited-board-name="onInput"
        @context-menu-click="onClick"
      />
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import BoardListItem from "@/components/organisms/boards/board-list-item/";
export default {
  name: "BoardList",
  props: {
    value: Array
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        ghostClass: this.$style.ghost
      };
    },
    boardList: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    onInput: function(value) {
      this.$emit("edited-board-name", value);
    },
    onClick: function(value) {
      this.$emit("context-menu-click", value);
    }
  },
  components: { BoardListItem, draggable }
};
</script>
<style lang="scss" module>
.list {
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
  overflow-x: auto;
  @include p(0 0 $s16 0);
}
.listItem {
  @include m(0 $s32 0 0);
  cursor: move;
}
.ghost {
  opacity: 0.3;
  cursor: move;
}
</style>
