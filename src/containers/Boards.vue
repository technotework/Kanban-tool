
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
    this.$store.getters.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid;
        let path = "/projects/" + this.$route.params.id;
        this.$store
          .dispatch("auth/setUserInfo", { uid: uid, path: path })
          .then(() => {
            this.init();
          });
      }
    });
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
        let obj = {
          data: value,
          name: "プロジェクト名",
          require: true,
          less: 15
        };
        validate(obj, () => {
          this.$store.dispatch("projects/updateProjectName", {
            id: this.projectId,
            name: value
          });
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
    ...mapActions("members", ["getMembers"]),
    ...mapMutations("message", ["setBoardDialogue", "resetBoardDialogue"]),
    ...mapMutations("boards", ["setProjectId"]),
    async init() {
      this.projectId = this.$route.params.id;
      await this.getMembers(); //メンバーデータ読み込み

      this.initBoardData(this.$route.params.id);
      this.read(); //BoardData読み込み
    },
    onInput(value) {
      let obj = {
        data: value.name,
        name: "ボード名",
        require: true,
        less: 12
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
      let object = { text: message[0].text, p: p, s: s };

      this.setBoardDialogue(object);
    }
  },
  components: {
    BoardUnit
  }
};
</script>
