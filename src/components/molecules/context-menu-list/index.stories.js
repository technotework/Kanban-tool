import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { ContextMenuList, Theme },
    template: `<Theme><ContextMenuList /></Theme>`
});