import { action, object, text } from "@/components/utils/story-export";
import { createDefStory } from "@/components/utils/story-creator";
import BoardUnit from "./index.vue";

const description =
    'import BoardUnit from "@/components/organisms/boards/board-unit/"';
export default createDefStory(
    "organisms/boards/BoardUnit",
    BoardUnit,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        BoardUnit
    },
    data: () => {
        return {
            boardList: [
                {
                    board: {
                        id: "a",
                        label: "Backlog",
                        order: 100
                    }
                },
                {
                    board: {
                        id: "b",
                        label: "Todo",
                        order: 200
                    }
                },
                {
                    board: {
                        id: "c",
                        label: "Complete",
                        order: 300
                    }
                }
            ]
        };
    },
    props: {
        projectName: { default: text("projectName", "Project") },
        userData: {
            default: object("userData", {
                username: "John Smith",
                img:
                    "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg"
            })
        }
    },
    template: `<BoardUnit
    v-model="boardList"
    :title.sync="projectName"

    :user-data="userData"
    
    @edited-board-name="onInput"
    @context-menu-click="onClick"
    @drag-sort-list="onDragSortList"
    
    @update:title="onEditedProjectName"
    @add-event="onCreateBoard"
    @nav-event="onNavClick"
  />`,
    methods: {
        onInput: action("edited-board-name"),
        onClick: action("context-menu-click"),
        onDragSortList: action("drag-sort-list"),

        onEditedProjectName: action("update:title"),
        onCreateBoard: action("add-event"),
        onNavClick: action("nav-event")
    }
});
