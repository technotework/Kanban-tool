<template  >
  <TaskList
    v-model="taskList"
    :members-container="members"
    :open.sync="isOpen"
    :data-board-id="id"
    :my-editor-id="myEditorId"
    @save-event="onSave"
    @form-add="onCreate"
    @delete-event="onDelete"
    @drag-sort-list="onDragSortList"
    @drag-add-list="onDragAddList"
    @start-edit-task="onStartEdit"
    @complete-edit-task="onCompleteEdit"
  />
</template>

<script>
import Members from "@/containers/Members";
import validate from "@/containers/resorces/validator";
import TaskList from "@/components/organisms/boards/task-list/";
import taskModule from "@/store/modules/tasks";
export default {
  name: "Tasks",
  props: {
    id: String
  },
  created: function() {
    this.init();
  },
  destroyed: function() {
    this.$store.commit(this.storeModuleName + "/remove");
    this.$store.unregisterModule(this.storeModuleName);
  },
  data: () => {
    return {
      storeModuleName: "",
      members: Members
    };
  },
  watch: {
    id(value) {
      this.storeModuleName = "task_" + value;
    }
  },
  computed: {
    taskList: {
      get() {
        let key = this.storeModuleName + "/tasks";
        return this.$store.getters[key];
      },
      set(value) {
        this.$store.commit(this.storeModuleName + "/setTasksData", value);
      }
    },
    isOpen: {
      get() {
        let key = this.storeModuleName + "/isOpen";
        return this.$store.getters[key];
      },
      set(value) {
        this.$store.commit(this.storeModuleName + "/setEditorOpen", value);
      }
    },
    myEditorId() {
      return this.$store.getters["auth/user"].altId;
    }
  },
  methods: {
    //...mapActions("tasks", ["read", "create", "delete", "updateTaskContent"]),
    init() {
      this.storeModuleName = "task_" + this.id;
      //this.$store.dispatch(this.storeModuleName + "/read");
    },
    onSave(value) {
      this.$store.dispatch(this.storeModuleName + "/updateTask", value);
    },
    onCreate(value) {
      this.$store.dispatch(this.storeModuleName + "/createTask", value);
    },
    onDelete(value) {
      this.$store.dispatch(this.storeModuleName + "/deleteTask", value);
    },
    onDragSortList(value) {
      this.$store.dispatch(this.storeModuleName + "/dragSortUpdate", value);
    },
    onDragAddList(value) {
      this.$store.dispatch(this.storeModuleName + "/dragAdded", value);
    },
    onStartEdit(value) {
      this.$store.dispatch(this.storeModuleName + "/lockTask", value);
    },
    onCompleteEdit(value) {
      this.$store.dispatch(this.storeModuleName + "/unlockTask", value);
    }
  },
  components: { TaskList }
};
</script>
