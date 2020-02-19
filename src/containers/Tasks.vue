<template :id="id" >
  <TaskList v-model="taskList" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskList from "@/components/organisms/boards/task-list/";

export default {
  name: "Tasks",
  props: {
    id: String
  },
  created: function() {
    this.init();
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("tasks", ["tasks"]),
    taskList: {
      get() {
        return this.tasks;
      },
      set(value) {
        this.$store.commit("tasks/setTasksData", value);
      }
    }
  },
  methods: {
    ...mapActions("tasks", ["read", "create", "delete", "updateTaskContent"]),
    init() {
      this.read(this.id);
    }
  },
  components: { TaskList }
};
</script>
