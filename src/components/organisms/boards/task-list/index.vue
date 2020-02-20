<template>
  <div>
    <IconedButton @click="onAddClick" type="add" :class="$style.add" />
    <div
      :class="[
        $style.postForm,
        { [$style.open]: showPost },
        { [$style.close]: !showPost }
      ]"
    >
      <PostForm @form-cancel="onCancelAddTask" @form-add="onAddTask" />
    </div>
    <draggable v-model="taskList" :class="$style.list" tag="ul" v-bind="dragOptions">
      <li v-for="item in taskList" :key="item.task.id">
        <TaskListItem
          :id="item.task.id"
          :content="item.task.data"
          :class="$style.listItem"
          @md-save-event="onSave"
        />
      </li>
    </draggable>
  </div>
</template>

<script>
import IconedButton from "@/components/molecules/iconed-button/";
import PostForm from "@/components/molecules/post-form/";
import draggable from "vuedraggable";
import TaskListItem from "@/components/organisms/boards/task-list-item/";
export default {
  name: "TaskList",
  props: {
    value: Array
  },
  data: function() {
    return {
      showPost: false
    };
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
  methods: {
    onAddClick: function(e) {
      this.showPost = !this.showPost;
    },
    onAddTask(value) {
      this.$emit("form-add", value);
    },
    onCancelAddTask: function(value) {
      this.showPost = false;
    },
    onSave(value) {
      this.$emit("md-save-event", value);
    }
  },
  components: { PostForm, IconedButton, TaskListItem, draggable }
};
</script>
<style lang="scss" module>
.postForm {
  overflow: hidden;
  @include m(0 1.6rem 0.4rem 1.6rem);
  height: 0px;
  @include tran($ms300);
}

.open {
  height: 143px;
}

.close {
  height: 0px;
}

.add {
  width: 77px;
  @include abs($t: 12px, $l: 19px);
}

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
