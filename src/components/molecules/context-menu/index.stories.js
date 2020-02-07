import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"

import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import ContextMenu from "./index.vue";


let description = `import ContextMenu from "@/components/molecules/context-menu/"';
`;
export default createDefStory("molecules/ContextMenu", ContextMenu, description);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ContextMenu
    },
    props: {
        compose:{ default: text("compose", "top") },
        id:{ default: text("id", "m1") },
        items: {
            default: object("items", [{
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
    template: `<div style="margin:200px;"><ContextMenu v-bind={id,items,compose} @context-menu-click="action" @close="close" /></div>`,
    methods: {
        action: action('context-menu-click'),
        close: action('close'),
    }
});
