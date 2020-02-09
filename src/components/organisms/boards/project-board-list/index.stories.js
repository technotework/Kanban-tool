import {
  object,
} from "@/components/utils/story-export"
import {
  createDefStory,
} from "@/components/utils/story-creator";
import ProjectBoardList from "./index.vue";

let description = 'import ProjectBoardList from "@/components/organisms/boards/project-board-list/"';
export default createDefStory("organisms/boards/ProjectBoardList", ProjectBoardList, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    ProjectBoardList
  },
  props: {
    boardList: {
      default: object("boardList", [

        {
          id: "b1",
          title: "backlog",
          taskList: [{
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
          taskList: [{
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
          taskList: [{
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

      ])
    }
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  template: `<ProjectBoardList v-bind="{boardList}" />`,
  methods: {}
});