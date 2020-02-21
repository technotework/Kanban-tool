
<template>
  <BoardUnit v-model="boardList" :title.sync="projectName" />
</template>

<script>
import BoardUnit from "@/components/organisms/boards/board-unit/";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Boards",
  props: {},
  data: () => {
    return {
      projectId: ""
    };
  },
  created: function() {
    this.init();
  },
  computed: {
    ...mapGetters("boards", ["boards"]),
    boardList: {
      get() {
        return this.boards;
      },
      set(value) {
        this.$store.commit("boards/setBoardsData", value);
      }
    },
    projectName: {
      get() {
        let projects = this.$store.getters["projects/projects"];
        let title = "";
        if (this.projectId != undefined) {
          console.log(this.projectId, projects);
          for (let i = 0; i < projects.length; i++) {
            if (projects[i].project.id == this.projectId) {
              title = projects[i].project.label;
            }
          }
        }
        return title;
      },
      set(value) {
        this.$store.dispatch("projects/updateProjectName", {
          id: this.projectId,
          name: value
        });
      }
    }
  },
  methods: {
    ...mapActions("boards", ["read", "create", "delete", "updateBoardName"]),
    ...mapMutations("boards", ["setProjectId"]),
    init() {
      this.projectId = this.$route.params.id;
      this.setProjectId(this.$route.params.id);
      this.read();
    },
    onInput(value) {
      this.updateBoardName(value);
    }
  },
  components: {
    BoardUnit
  }
};
</script>
