import { action } from "@/components/utils/story-export";
import { createDefStory } from "@/components/utils/story-creator";
import BoardListItem from "./index.vue";

const description =
    'import BoardListItem from "@/components/organisms/boards/board-list-item/"';
export default createDefStory(
    "organisms/boards/BoardListItem",
    BoardListItem,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        BoardListItem
    },
    data: () => ({
        label: "boardName",
        id: "id"
    }),
    props: {},
    template: `<BoardListItem
  v-model="label"
  :id="id"
  @edited-board-name="onInput"
  @context-menu-click="onClick"
  />`,
    methods: {
        onInput: action("edited-board-name"),
        onClick: action("context-menu-click")
    }
});
