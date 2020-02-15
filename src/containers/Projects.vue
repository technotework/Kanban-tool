<template>
  <ProjectUnit :items="projects" @click="onClick" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProjectUnit from "@/components/organisms/projects/project-unit/";

export default {
  name: "Projects",
  created: function() {
    this.init();
  },
  props: {},
  data: () => {
    return {};
  },
  computed: {
    ...mapGetters("projects", ["projects"])
  },
  methods: {
    ...mapActions("projects", ["read", "create"]),
    init() {
      this.read();
    },
    onClick() {
      this.create();
    }
  },
  components: { ProjectUnit }
};
</script>
