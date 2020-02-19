<template>
  <div :class="$style.item">
    <PostedMD v-model.lazy="taskData" />
  </div>
</template>

<script>
/*
[Components]
board-list
↓
(propsでboardList)
board-list-item
(v-modelでtitle)
↓
(propsでtaskList)
task-list(taskList)
↓
(v-modelでtaskData)
[here!] task-list-item(taskData)
↓
(v-modelでcontent)
click-to-editable-md

[DATA] v-model
boardList:[
  {id:boardID,title:boardTitle,taskList:[{id:taskID,data:taskData},{id:taskID,data:taskData}]},
  {id:boardID,title:boardTitle,taskList:[{id:taskID,data:taskData},{id:taskID,data:taskData}]},
]
*/
import { PostedMD } from "@/components/molecules/click-to-editable-md/compose";
export default {
  name: "TaskListItem",
  props: {
    value: String
  },
  methods: {
    onClick: function() {}
  },
  computed: {
    taskData: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  components: { PostedMD }
};
</script>
<style lang="scss" module>
.item {
  position: relative;
  @include spr($w: 100%, $mh: 100px, $p: 0, $r: 0);
  @include bgc($white);
}
</style>
