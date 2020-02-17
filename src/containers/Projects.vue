<template>
  <ProjectUnit
    v-model="projectItems"
    @click="onClick"
    @context-menu-click="onMenuClick"
    @edited-project-name="onInput"
  />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProjectUnit from "@/components/organisms/projects/project-unit/";

export default {
  name: "Projects",
  created: function() {
    //初期化時プロジェクトを読み込む
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
    ...mapActions("projects", ["read", "create", "delete", "update"]),
    init() {
      this.read();
    },
    onClick() {
      this.create();
    },
    onMenuClick(value) {
      let id = value.id;
      if (value.name == "delete") {
        this.delete(id);
      } else if (value.name == "edit") {
        console.log("edit", id);
      }
    },
    onInput: function(value) {
      this.update(value);
    }
  },
  components: { ProjectUnit }
};
</script>
