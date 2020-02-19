import {
  object,
} from "@/components/utils/story-export"
import {
  createDefStory,
} from "@/components/utils/story-creator";
import BoardList from "./index.vue";

let description = 'import BoardList from "@/components/organisms/boards/board-list/"';
export default createDefStory("organisms/boards/BoardList", BoardList, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    BoardList
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
            id: "t4",
            data: "todo:あいうえおあいうえお"
          },
          {
            id: "t5",
            data: "todo:あいうえおあいうえお"
          },
          {
            id: "t6",
            data: "todo:あいうえおあいうえお"
          }
          ]
        },
        {
          id: "b3",
          title: "debug",
          taskList: [{
            id: "t7",
            data: "todo:あいうえおあいうえお"
          },
          {
            id: "t8",
            data: "todo:あいうえおあいうえお"
          },
          {
            id: "t9",
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
  template: `<BoardList v-bind="{boardList}" />`,
  methods: {}
});