<template>
  <div :class="$style.board">
    <ClickToEditableInput v-model.lazy="titleData" :class="$style.input" />
    <ContextMenu
      :class="$style.contextMenu"
      @context-menu-click="onMenuClick"
      v-bind="{ menuItems, id }"
      compose="bottom"
    />
    <IconedButton @click="onAddClick" type="add" :class="$style.add" />
    <template v-if="showPost">
      <transition>
        <div :class="$style.postForm">
          <PostForm
            v-model="postContent"
            @form-cancel="onFormCancelClick"
            @form-add="onFormAddClick"
          />
        </div>
      </transition>
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
import IconedButton from "@/components/molecules/iconed-button/";
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
      showPost: false
    };
  },
  computed: {
    titleData: {
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
    },
    onAddClick: function(e) {
      this.showPost = !this.showPost;
    },
    onFormCancelClick: function(value) {
      console.log(value);
      this.showPost = false;
    },
    onFormAddClick: function(value) {
      console.log(value);
    }
  },
  components: {
    ClickToEditableInput,
    ContextMenu,
    ProjectTaskList,
    PostForm,
    IconedButton
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
  @include m(2.4rem 1.6rem 1.8rem 1.6rem);
}
.postForm {
  @include m(0 1.6rem 0.4rem 1.6rem);
  height: 137px;
}
.contextMenu {
  @include abs($t: $s8, $r: $s18);
  flex: 1;
}
.add {
  width: 77px;
  @include abs($t: 11px, $l: 14px);
}
</style>
