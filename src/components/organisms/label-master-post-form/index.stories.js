
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { LabelMasterPostForm, Theme },
    template: `<Theme><LabelMasterPostForm /></Theme>`
});