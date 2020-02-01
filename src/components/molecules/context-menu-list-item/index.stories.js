import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import ContextMenuListItem from "./index.vue";

export default {
    title: "molecules/ContextMenuListItem",
    component: { ContextMenuListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ContextMenuListItem },
    template: `<ContextMenuListItem />`
});