<template>
  <ProjectUnit :items="projects" @click="onClick" @change="updateMessage" />
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
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
    ...mapMutations("projects", ["setData"]),
    init() {
      this.read();
    },
    onClick() {
      this.create();
    },
    updateMessage() {
      this.setData(this.projects);
    }
  },
  components: { ProjectUnit }
};
</script>
