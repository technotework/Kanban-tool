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

let description = 'import ProjectBoardListItem from "@/components/organisms/boards/project-board-list-item/"';
export default createDefStory("organisms/boards/ProjectBoardListItem", ProjectBoardListItem, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    ProjectBoardListItem
  },
  data: () => ({
    title: "boardName",
  }),
  props: {
    taskList: {
      default: object("taskList", [{
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
      ])
    }
  },
  data: () => {
    return {
      myValue: "",
    }
  },
  template: `<ProjectBoardListItem v-model.lazy="title" v-bind="{taskList}" />`,
  methods: {}
});