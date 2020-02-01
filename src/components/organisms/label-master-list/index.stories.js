
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import LabelMasterList from "./index.vue";

export default {
    title: "organisms/LabelMasterList",
    component: { LabelMasterList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LabelMasterList },
    template: `<LabelMasterList />`
});