<template :id="id" >
  <TaskList v-model="taskList" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskList from "@/components/organisms/boards/task-list/";
import taskModule from "@/store/modules/tasks";

export default {
  name: "Tasks",
  props: {
    id: String
  },
  created: function() {
    this.registTaskModule();
    this.init();
  },
  destroyed: function() {
    this.unregistTaskModule();
  },
  data: () => {
    return {
      storeModuleName: ""
    };
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
    }
  },
  methods: {
    //...mapActions("tasks", ["read", "create", "delete", "updateTaskContent"]),
    registTaskModule() {
      this.storeModuleName = "task_" + this.id;
      this.$store.registerModule(this.storeModuleName, taskModule);
    },
    unregistTaskModule() {
      this.$store.unregisterModule(this.storeModuleName);
    },
    init() {
      this.$store.dispatch(this.storeModuleName + "/read", this.id);
    }
  },
  components: { TaskList }
};
</script>
