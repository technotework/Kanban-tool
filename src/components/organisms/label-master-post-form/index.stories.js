
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import LabelMasterPostForm from "./index.vue";

export default {
    title: "organisms/LabelMasterPostForm",
    component: { LabelMasterPostForm },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LabelMasterPostForm },
    template: `<LabelMasterPostForm />`
});