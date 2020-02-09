<template>
  <ul :class="$style.list">
    <li v-for="task in taskList" :key="task.id">
      <ProjectTaskListItem v-model.lazy="task.data" :class="$style.listItem" />
    </li>
  </ul>
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
import ProjectTaskListItem from "@/components/organisms/boards/project-task-list-item/";
export default {
  name: "ProjectTaskList",
  props: {
    value: String,
    taskList: Array
  },
  components: { ProjectTaskListItem }
};
</script>
<style lang="scss" module>
.list {
  width: 100%;
  overflow-y: auto;
  @include p(0 16px);
}
.listItem {
  @include m(0 0 16px 0);
  @include s($mxw: 238px);
}
</style>
