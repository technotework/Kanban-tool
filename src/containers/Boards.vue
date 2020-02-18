
<template>
  <ProjectBoardUnit v-bind="{boardList}" @click="onClick" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProjectBoardUnit from "@/components/organisms/boards/project-board-unit/";

export default {
  name: "Boards",
  props: {},
  data: () => {
    return {
      id: ""
    };
  },
  mounted: function() {
    this.init();
  },
  computed: {
    ...mapGetters("boards", ["boards"]),
    boardList: {
      get() {
        return this.boards;
      },
      set(value) {
        this.$store.commit("boards/setData", value);
      }
    }
  },
  methods: {
    ...mapActions("boards", ["read", "create", "delete"]),
    init() {
      let id = "li8k1FpjDDz6lOIr3O3B";
      //let id = this.$route.params.id;
      this.read(id);
    },
    onClick(e) {}
  },
  components: { ProjectBoardUnit }
};
</script>
