
<template>
  <ProjectBoardUnit v-model="boardList" :title.sync="title" @click="onClick" />
</template>

<script>
import ProjectBoardUnit from "@/components/organisms/boards/project-board-unit/";

export default {
  name: "Boards",
  props: {},
  data: () => {
    return {
      title: "joge"
    };
  },
  mounted: function() {
    this.init();
  },
  computed: {
    id: function() {
      return this.$route.params.id;
    },
    boardList: {
      get() {
        return this.$store.getters["boards/boards"];
      },
      set(value) {
        this.$store.commit("boards/setData", value);
      }
    }
    /*
    projectName: {
      get() {
        let projects = this.$store.getters["projects/projects"];
        let title = "";
        if (this.id != undefined) {
          for (let i = 0; i < projects.length; i++) {
            if (projects[i].project.id == this.id) {
              title = projects[i].project.label;
            }
          }
        }
        return title;
      },
      set(value) {
        this.$store.commit("projects/setName", { id: this.id, value: value });
      }
    }*/
  },
  methods: {
    init() {
      console.log("aaa");
      this.$store.dispatch("boards/read", this.id);
    },
    onClick(e) {}
  },
  components: { ProjectBoardUnit }
};
</script>
