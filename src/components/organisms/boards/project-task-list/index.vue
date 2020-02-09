<template>
  <draggable
    :list="taskList"
    :class="$style.list"
    tag="ul"
    v-bind="dragOptions"
  >
    <li v-for="task in taskList" :key="task.id">
      <ProjectTaskListItem v-model.lazy="task.data" :class="$style.listItem" />
    </li>
  </draggable>
</template>

<script>
/*
[Components]
project-board-list
↓
(propsでboardList)
project-board-list-item
(v-modelでtitle)
↓
(propsでtaskList)
[here!] project-task-list(taskList)
↓
(v-modelでtaskData)
project-task-list-item(taskData)
↓
(v-modelでcontent)
click-to-editable-md

[DATA] v-model
boardList:[
  {id:boardID,title:boardTitle,taskList:[{id:taskID,data:taskData},{id:taskID,data:taskData}]},
  {id:boardID,title:boardTitle,taskList:[{id:taskID,data:taskData},{id:taskID,data:taskData}]},
]
*/
import draggable from "vuedraggable";
import ProjectTaskListItem from "@/components/organisms/boards/project-task-list-item/";
export default {
  name: "ProjectTaskList",
  props: {
    value: String,
    taskList: Array
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "tasks",
        ghostClass: this.$style.ghost
      };
    }
  },
  components: { ProjectTaskListItem, draggable }
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
