
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import LabelMasterListItem from "./index.vue";

export default {
    title: "organisms/LabelMasterListItem",
    component: { LabelMasterListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LabelMasterListItem },
    template: `<LabelMasterListItem />`
});