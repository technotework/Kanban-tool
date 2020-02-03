import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import ContextMenuList from "./index.vue";

export default {
    title: "molecules/ContextMenuList",
    component: { ContextMenuList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ContextMenuList },
    template: `<ContextMenuList />`
});