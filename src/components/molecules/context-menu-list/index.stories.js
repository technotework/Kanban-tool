import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import {
    action,
    object,
} from "@/components/utils/story-export"
import ContextMenuList from "./index.vue";


let description = 'import ContextMenuList from "@/components/molecules/context-menu-list/"';

export default createDefStory("molecules/ContextMenuList", ContextMenuList, description);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ContextMenuList
    },
    props: {
        id: "menu1",
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
    template: `<ContextMenuList v-bind={id,items} @context-menu-click="action" @close="close" />`,
    methods: {
        action: action('context-menu-click'),
        close: action('close'),
    }
});