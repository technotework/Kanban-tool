
<template>
  <BoardUnit
    v-model="boardList"
    :title.sync="projectName"
    :task-container="task"
    @edited-board-name="onInput"
    @context-menu-click="onClick"
    @drag-sort-list="onDragSortList"
    @create-board="onCreateBoard"
  />
</template>

<script>
import BoardUnit from "@/components/organisms/boards/board-unit/";
import Task from "@/containers/Tasks";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "Boards",
  props: {},
  data: () => {
    return {
      projectId: "",
      task: Task
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
    ...mapActions("boards", [
      "initBoardData",
      "read",
      "create",
      "delete",
      "updateBoardName",
      "dragSortUpdate"
    ]),
    ...mapMutations("boards", ["setProjectId"]),
    init() {
      this.projectId = this.$route.params.id;
      this.initBoardData(this.$route.params.id);
      this.read();
    },
    onInput(value) {
      this.updateBoardName(value);
    },
    onClick(value) {
      if (value.name == "delete") {
        this.delete(value);
      }
    },
    onDragSortList(value) {
      this.dragSortUpdate(value);
    },
    onCreateBoard() {
      this.create();
    }
  },
  components: {
    BoardUnit
  }
};
</script>
