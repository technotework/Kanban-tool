
<template>
  <BoardUnit v-model="boardList" @click="onClick" @edited-board-name="onInput" />
</template>

<script>
import BoardUnit from "@/components/organisms/boards/board-unit/";

import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Boards",
  props: {},
  data: () => {
    return {
      title: "joge"
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
    } /*,
    projectName: {
      get() {
        let projects = this.$store.getters["projects/projects"];
        let title = "";
        if (this.myId != undefined) {
          for (let i = 0; i < projects.length; i++) {
            if (projects[i].project.id == this.myId) {
              title = projects[i].project.label;
            }
          }
        }
        return title;
      },
      set(value) {
        this.$store.commit("projects/setName", { id: this.myId, value: value });
      }
    }*/
  },
  methods: {
    ...mapActions("boards", ["read", "create", "delete", "updateBoardName"]),
    ...mapMutations("boards", ["setProjectId"]),
    init() {
      this.setProjectId(this.$route.params.id);
      this.read();
    },
    onInput: function(value) {
      this.updateBoardName(value);
    },
    onClick(e) {}
  },
  components: {
    BoardUnit
  }
};
</script>
