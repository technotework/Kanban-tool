
<template>
  <ProjectBoardList v-bind="{boardList}" />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProjectBoardList from "@/components/organisms/boards/project-board-list/";

export default {
  name: "Boards",
  props: {},
  data: () => {
    return {
      boardList: []
    };
  },
  computed: {},
  components: { ProjectBoardList }
};
</script>
