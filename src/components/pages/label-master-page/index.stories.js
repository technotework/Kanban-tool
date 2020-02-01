
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { LabelMasterPage },
    template: `<LabelMasterPage />`
});