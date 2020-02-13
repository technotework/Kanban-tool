<template>
  <ProjectList v-bind="{taskList}" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProjectTaskList from "@/components/organisms/boards/project-task-list/";

export default {
  name: "Projects",
  props: {},
  data: () => {
    return {
      taskList: []
    };
  },
  computed: {},
  components: { ProjectTaskList }
};
</script>
