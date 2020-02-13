<template>
  <ProjectList v-bind="{items}" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProjectList from "@/components/organisms/projects/project-list/";

export default {
  name: "Projects",
  props: {},
  data: () => {
    return {
      items: []
    };
  },
  computed: {},
  components: { ProjectList }
};
</script>
