
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
import { mapActions, mapGetters, mapMutations } from "vuex";
import BoardUnit from "@/components/organisms/boards/board-unit/";
import Task from "@/containers/Tasks";
import { getConfirmMessage } from "@/containers/resorces/message";
import validate from "@/containers/resorces/validator";
import { TYPE, APP } from "@/containers/resorces/message";
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
    ...mapMutations("message", ["setBoardDialogue", "resetBoardDialogue"]),
    ...mapMutations("boards", ["setProjectId"]),
    init() {
      this.projectId = this.$route.params.id;
      this.initBoardData(this.$route.params.id);
      this.read();
    },
    onInput(value) {
      let obj = {
        data: value.name,
        name: "ボード名",
        require: true,
        less: 12,
        password: true
      };
      validate(obj, () => {
        this.updateBoardName(value);
      });
    },
    onClick(value) {
      if (value.name == "delete") {
        this.showDeleteDialogue(value);
      }
    },
    onDragSortList(value) {
      this.dragSortUpdate(value);
    },
    onCreateBoard() {
      this.create();
    },
    showDeleteDialogue(value) {
      let p = () => {
        this.delete(value.id);
        this.resetBoardDialogue();
      };

      let s = () => {
        this.resetBoardDialogue();
      };

      let message = getConfirmMessage({
        type: TYPE.CONFIRM,
        normal: APP.DELETE,
        arg: { name: value.title }
      });
      let object = { text: message.text, p: p, s: s };

      this.setBoardDialogue(object);
    }
  },
  components: {
    BoardUnit
  }
};
</script>
