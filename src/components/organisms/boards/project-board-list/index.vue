<template>
  <ul :board-list="boardList" :class="$style.list">
    <li
      v-for="boardItem in boardList"
      :key="boardItem.id"
      :class="$style.listItem"
    >
      <ProjectBoardListItem
        v-model="boardItem.title"
        :id="boardItem.id"
        :task-list="boardItem.taskList"
      />
    </li>
  </ul>
</template>

<script>
/*
[Components]
[here!] project-board-list
↓
(propsでboardList)
project-board-list-item
(v-modelでtitle)
↓
(propsでtaskList)
project-task-list(taskList)
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
import ProjectBoardListItem from "@/components/organisms/boards/project-board-list-item/";
export default {
  name: "ProjectBoardList",
  props: {
    value: String,
    boardList: Array
  },
  components: { ProjectBoardListItem }
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
}
</style>
