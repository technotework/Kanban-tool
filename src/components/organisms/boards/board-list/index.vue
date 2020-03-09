<template>
  <draggable
    v-model="boardList"
    :class="$style.list"
    filter=".ignore"
    tag="ul"
    v-bind="dragOptions"
    @end="onDragSortList"
  >
    <li
      v-for="boardItem in boardList"
      :data-id="boardItem.board.id"
      :key="boardItem.board.id"
      :class="$style.listItem"
    >
      <BoardListItem
        v-model="boardItem.board.label"
        :id="boardItem.board.id"
        :task-container="taskContainer"
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
    value: Array,
    taskContainer: Object
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        preventOnFilter: false,
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
    },
    onDragSortList(e) {
      let dataSet = e.item.dataset;
      this.$emit("drag-sort-list", dataSet);
    }
  },
  components: { BoardListItem, draggable }
};
</script>
<style lang="scss" module>
.list {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
  overflow-x: auto;
}
.listItem {
  margin: 0 32px 0 0;
  padding-bottom: 85px;
  cursor: move;
}
.ghost {
  opacity: 0.3;
  cursor: move;
}
</style>
