import { createDefStory } from "@/components/utils/story-creator";
import { action, text, object } from "@/components/utils/story-export";
import ContextMenu from "./index.vue";

const description =
    'import ContextMenu from "@/components/molecules/context-menu/"';
export default createDefStory(
    "molecules/ContextMenu",
    ContextMenu,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ContextMenu
    },
    props: {
        compose: {
            default: text("compose", "top")
        },
        id: {
            default: text("id", "m1")
        },
        menuItems: {
            default: object("menuItems", [
                {
                    value: "編集",
                    name: "edit"
                },
                {
                    value: "削除",
                    name: "delete"
                },
                {
                    value: "複製",
                    name: "duplicate"
                }
            ])
        }
    },
    template: `<div style="background-color:#fff; margin:200px; width:30px; padding:5px; position:relative;"><ContextMenu v-bind={id,menuItems,compose} @context-menu-click="action" @close="close" /></div>`,
    methods: {
        action: action("context-menu-click"),
        close: action("close")
    }
});
