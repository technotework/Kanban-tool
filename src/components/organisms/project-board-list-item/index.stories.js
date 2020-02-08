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
    id: {
      default: text("id", "board1")
    },
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
        }
      ])
    }
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  template: `<ProjectBoardListItem v-model.lazy="myValue" v-bind="{tasks,id,content}" />`,
  methods: {}
});