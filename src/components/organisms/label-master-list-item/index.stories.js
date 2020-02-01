
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { LabelMasterListItem, Theme },
    template: `<Theme><LabelMasterListItem /></Theme>`
});