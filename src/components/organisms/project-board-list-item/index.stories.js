import {
  text,
  object,
} from "@/components/utils/story-export"
import {
    createDefStory,
    createStory,
    tagTemp
  } from "@/components/utils/story-creator";
import ProjectBoardListItem from "./index.vue";

  let description = 'import ProjectBoardListItem from "@/components/organisms/project-board-list-item/"';
  export default createDefStory("organisms/ProjectBoardListItem", ProjectBoardListItem, description);
  

  //---------------------
//Basic
export const Basic = () => ({
  components: {
    ProjectBoardListItem
  },
  props: {
    content: { default: text("content", "Title") },
      id: { default: text("id", "board1") },
      tasks: {
          default: object("tasks", [{
                  id: "t1",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t2",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t3",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t4",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t5",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t6",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t7",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t8",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t9",
                  title: "todo:あいうえおあいうえお"
              },
              {
                  id: "t10",
                  title: "todo:あいうえおあいうえお"
              }
          ])
      }
  },
  template: `<ProjectBoardListItem v-bind="{tasks,id,content}" />`,
  methods: {
  }
});
