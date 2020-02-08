import {
  text,
  object,
} from "@/components/utils/story-export"
import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import ProjectBoardList from "./index.vue";

let description = 'import ProjectBoardList from "@/components/organisms/project-board-list/"';
export default createDefStory("organisms/ProjectBoardList", ProjectBoardList, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    ProjectBoardList
  },
  props: {
    items: {
      default: object("items", [

        {
          id: "b1",
          name: "backlog",
          tasks: [{
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
          ]
        },
        {
          id: "b2",
          name: "todo",
          tasks: [{
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
          ]
        },
        {
          id: "b3",
          name: "debug",
          tasks: [{
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
  template: `<ProjectBoardList v-bind="{items}" />`,
  methods: {}
});