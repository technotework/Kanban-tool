<template>
  <div>
    <div
      :class="[
        $style.postButton,
        { [$style.open]: open },
        { [$style.close]: !open }
      ]"
    >
      <IconedButton type="plusmini" :class="$style.add" @click="onAddClick" />
    </div>
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
          :members-container="membersContainer"
          :id="item.task.id"
          :board-id="dataBoardId"
          :content="item.task.data"
          :class="$style.listItem"
          v-model="item.task.members"
          @save-event="onSave"
          @delete-event="onDelete"
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
    membersContainer: Object,
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
      this.$emit("save-event", value);
    },
    onDelete: function(value) {
      this.$emit("delete-event", value);
    },
    changeOpen(value) {
      this.$emit("update:open", value);
    },
    onDragUpdeteList(e) {
      let dataSet = e.item.dataset;
      this.$emit("drag-sort-list", dataSet);
    },
    onDragAdd(e) {
      let dataSet = e.item.dataset;
      this.$emit("drag-add-list", dataSet);
    }
  },
  components: { PostForm, TaskListItem, IconedButton, draggable }
};
</script>
<style lang="scss" module>
.postForm {
  overflow: hidden;
  margin: 0 14px 15px 14px;
  height: 0px;
  opacity: 0;
  @include transiton($ms200);
}

.postForm.open {
  height: 170px;
  margin-bottom: 15px;
  opacity: 1;
}

.postForm.close {
  height: 0px;
  margin-bottom: 0;
  opacity: 0;
}

.postButton {
  overflow: hidden;
  height: 26px;
  margin-bottom: 15px;
  opacity: 1;
  @include transiton($ms300);
}

.postButton.open {
  height: 0px;
  margin-bottom: 0;
  opacity: 0;
}

.postButton.close {
  height: 26px;
  margin-bottom: 15px;
  opacity: 1;
}

.add {
  margin: 3px 14px 21px 14px;
}

.list {
  width: 100%;
  max-height: calc(100vh - 296px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 14px;
}
.listItem {
  margin: 0 0 16px 0;
  max-width: 238px;
  cursor: move;
}
.ghost {
  opacity: 0.3;
  cursor: move;
}
</style>
