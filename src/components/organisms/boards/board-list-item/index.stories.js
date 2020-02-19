import {
  text,
  object,
} from "@/components/utils/story-export"
import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BoardListItem from "./index.vue";

let description = 'import BoardListItem from "@/components/organisms/boards/board-list-item/"';
export default createDefStory("organisms/boards/BoardListItem", BoardListItem, description);


//---------------------
//Basic
export const Basic = () => ({
  components: {
    BoardListItem
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
  template: `<BoardListItem v-model.lazy="myValue" v-bind="{taskList}" />`,
  methods: {}
});