<template>
  <draggable v-model="taskList" :class="$style.list" tag="ul" v-bind="dragOptions">
    <li v-for="item in taskList" :key="item.task.id">
      <TaskListItem v-model.lazy="item.task.data" :class="$style.listItem" />
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import TaskListItem from "@/components/organisms/boards/task-list-item/";
export default {
  name: "TaskList",
  props: {
    value: Array
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "tasks",
        ghostClass: this.$style.ghost
      };
    },
    taskList: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { TaskListItem, draggable }
};
</script>
<style lang="scss" module>
.list {
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  @include p(0 16px);
}
.listItem {
  @include m(0 0 16px 0);
  @include s($mxw: 238px);
  cursor: move;
}
.ghost {
  opacity: 0.3;
  cursor: move;
}
</style>
