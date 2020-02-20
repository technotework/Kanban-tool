<template>
  <div>
    <IconedButton @click="onAddClick" type="add" :class="$style.add" />
    <div
      :class="[
        $style.postForm,
        { [$style.open]: open },
        { [$style.close]: !open }
      ]"
    >
      <PostForm @form-cancel="onCancelAddTask" @form-add="onAddTask" />
    </div>
    <draggable
      v-model="taskList"
      :class="$style.list"
      tag="ul"
      v-bind="dragOptions"
      @end="onDragUpdeteList"
      @add="onDragAdd"
    >
      <li
        v-for="item in taskList"
        :key="item.task.id"
        :data-id="item.task.id"
        :data-board-id="dataBoardId"
      >
        <TaskListItem
          :id="item.task.id"
          :content="item.task.data"
          :class="$style.listItem"
          @md-save-event="onSave"
          @md-delete-event="onDelete"
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
    value: Array,
    open: Boolean,
    dataBoardId: String
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
      this.changeOpen(!this.open);
    },
    onAddTask(value) {
      this.$emit("form-add", value);
    },
    onCancelAddTask: function(value) {
      this.changeOpen(false);
    },
    onSave(value) {
      this.$emit("md-save-event", value);
    },
    onDelete: function(value) {
      this.$emit("md-delete-event", value);
    },
    changeOpen(value) {
      this.$emit("update:open", value);
    },
    onDragUpdeteList() {
      this.$emit("update-list-sort");
    },
    onDragAdd(e) {
      let dataSet = e.item.dataset;
      console.log(dataSet);
      this.$emit("drag-add-list", dataSet);
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
