<template>
  <ProjectUnit @click="onClick" />
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
      items: []
    };
  },
  computed: {},
  methods: {
    ...mapActions("projects", ["read"]),
    init() {
      this.read();
    },
    onClick() {}
  },
  components: { ProjectUnit }
};
</script>
