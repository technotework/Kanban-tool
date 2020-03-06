import {
  action
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
  },
  data: () => {
    return {
      items: [
        {
          "board": {
            "id": "a",
            "label": "Backlog",
            "order": 100
          }
        },
        {
          "board": {
            "id": "b",
            "label": "Todo",
            "order": 200
          }
        },
        {
          "board": {
            "id": "c",
            "label": "Complete",
            "order": 300
          }
        },
      ]
    }
  },
  template: `<BoardList
  v-model="items"
  @edited-board-name="onInput"
  @context-menu-click="onClick"
  @drag-sort-list="onDragSortList"
/>`,
  methods: {
    onInput: action("edited-board-name"),
    onClick: action("context-menu-click"),
    onDragSortList: action("drag-sort-list"),
  }
});