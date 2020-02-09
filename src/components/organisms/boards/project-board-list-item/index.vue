<template>
  <div :class="$style.board">
    <ClickToEditableInput
      v-model.lazy="title"
      :class="$style.input"
      role="title"
    />
    <ContextMenu
      :class="$style.contextMenu"
      @context-menu-click="onMenuClick"
      v-bind="{ menuItems, id }"
      compose="bottom"
    />
    <template v-if="showPost">
      <PostForm v-model="postContent" :class="$style.postForm" />
    </template>
    <ProjectTaskList :task-list="taskList" />
  </div>
</template>

<script>
/*
[Components]
project-board-list
↓
(propsでboardList)
[here!] project-board-list-item
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
import PostForm from "@/components/molecules/post-form/";
import ClickToEditableInput from "@/components/molecules/click-to-editable-input/";
import ContextMenu from "@/components/molecules/context-menu/";
import ProjectTaskList from "@/components/organisms/boards/project-task-list/";

export default {
  name: "ProjectBoardListItem",
  props: {
    value: String,
    taskList: Array,
    id: String
  },
  data: function() {
    return {
      menuItems: [
        {
          value: "ボードを削除",
          name: "delete"
        }
      ],
      postContent: "",
      showPost: true
    };
  },
  computed: {
    title: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    onMenuClick: function(value) {
      console.log(value);
    }
  },
  components: { ClickToEditableInput, ContextMenu, ProjectTaskList, PostForm }
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
  @include m(2.4rem 1.6rem 1.8rem 1.6rem);
}
.postForm {
  @include m(0 1.6rem 0.4rem 1.6rem);
}
.contextMenu {
  @include abs($t: $s8, $r: $s18);
  flex: 1;
}
</style>
