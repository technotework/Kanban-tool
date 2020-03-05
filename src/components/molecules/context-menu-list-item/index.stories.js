import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import ContextMenuListItem from "./index.vue";

let description = 'import ContextMenuListItem from "@/components/molecules/context-menu-list-item/"';
export default createDefStory("molecules/ContextMenuListItem", ContextMenuListItem, description);


//---------------------
//Basic
let setting = {
    name: "ContextMenuListItem",
    compos: { ContextMenuListItem: ContextMenuListItem },
    props: {
        value: "menu",
        name: "menu",
    },
    action: { event: "click" },
    template: tagTemp`<div style="background-color:#fff;padding:30px"><ContextMenuListItem ${'props'} ${'action'} /></div>`
};

export const Basic = () => (createStory(setting));
