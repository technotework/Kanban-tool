<template>
  <ProjectUnit
    v-model="projectItems"
    @click="onClick"
    @context-menu-click="onMenuClick"
    @edited-project-name="onInput"
    @drag-sort-list="onDragSortList"
  />
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ProjectUnit from "@/components/organisms/projects/project-unit/";
import { getConfirmMessage } from "@/containers/resorces/message";
import { TYPE, APP } from "@/containers/resorces/message";
import validate from "@/containers/resorces/validator";
export default {
  name: "Projects",
  created: function() {
    //初期化時プロジェクトを読み込む
    this.$store.getters.firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let uid = user.uid;
        let path = "/projects";
        this.$store
          .dispatch("auth/setUserInfo", { uid: uid, path: path })
          .then(() => {
            this.init();
          });
      }
    });
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
    ...mapActions("projects", [
      "initProjectData",
      "read",
      "create",
      "delete",
      "updateProjectName",
      "dragSortUpdate"
    ]),
    ...mapMutations("message", ["setProjectDialogue", "resetProjectDialogue"]),
    init() {
      this.initProjectData();
      this.read();
    },
    onClick() {
      this.initProjectData();
      this.create();
    },
    onMenuClick(value) {
      let id = value.id;
      if (value.name == "delete") {
        //削除
        this.showDeleteDialogue(value);
      } else if (value.name == "edit") {
        //画面遷移
        let path = "projects/" + value.id;
        this.$router.push({
          path: path
        });
      }
    },
    onDragSortList(value) {
      this.dragSortUpdate(value);
    },
    onInput: function(value) {
      let obj = {
        data: value.name,
        name: "プロジェクト名",
        require: true,
        less: 15
      };
      validate(obj, () => {
        this.updateProjectName(value);
      });
    },
    showDeleteDialogue(value) {
      let p = () => {
        this.delete(value.id);
        this.resetProjectDialogue();
      };

      let s = () => {
        this.resetProjectDialogue();
      };

      let message = getConfirmMessage({
        type: TYPE.CONFIRM,
        normal: APP.DELETE,
        arg: { name: value.title }
      });
      let object = { text: message[0].text, p: p, s: s };

      this.setProjectDialogue(object);
    }
  },
  components: { ProjectUnit }
};
</script>
