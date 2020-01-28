
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import LabelMasterPage from "./index.vue";

export default {
    title: "pages/LabelMasterPage",
    component: { LabelMasterPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LabelMasterPage, Theme },
    template: `<Theme><LabelMasterPage /></Theme>`
});