<template>
  <div id="app">
    <router-view />
    <ProjectBoardList :board-list="boardList" />
  </div>
</template>

<script>
import ProjectBoardList from "@/components/organisms/boards/project-board-list/";
export default {
  name: "App",
  data: () => {
    return {
      boardList: [
        {
          id: "b1",
          title: "backlog",
          taskList: [
            {
              id: "t1",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t2",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t3",
              data: "todo:あいうえおあいうえお"
            }
          ]
        },
        {
          id: "b2",
          title: "todo",
          taskList: [
            {
              id: "t1",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t2",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t3",
              data: "todo:あいうえおあいうえお"
            }
          ]
        },
        {
          id: "b3",
          title: "debug",
          taskList: [
            {
              id: "t1",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t2",
              data: "todo:あいうえおあいうえお"
            },
            {
              id: "t3",
              data: "todo:あいうえおあいうえお"
            }
          ]
        }
      ]
    };
  },
  methods: {},
  components: { ProjectBoardList }
};
</script>
