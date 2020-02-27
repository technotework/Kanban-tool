<template  >
  <TaskList
    v-model="taskList"
    :open.sync="isOpen"
    :data-board-id="id"
    @md-save-event="onSave"
    @form-add="onCreate"
    @md-delete-event="onDelete"
    @drag-sort-list="onDragSortList"
    @drag-add-list="onDragAddList"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
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
  data: () => {
    return {
      storeModuleName: ""
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
    }
  },
  components: { TaskList }
};
</script>
