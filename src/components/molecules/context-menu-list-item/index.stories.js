import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
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