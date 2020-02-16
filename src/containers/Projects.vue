<template>
  <ProjectUnit v-model="projectItems" @click="onClick" />
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
    return {
      value: Array
    };
  },
  computed: {
    ...mapGetters("projects", ["projects"]),
    projectItems: {
      get() {
        return this.projects;
      },
      set(value) {
        this.$store.commit("projects/setData", value);
      }
    }
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
