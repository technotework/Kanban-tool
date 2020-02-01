
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import ManageMemberListItem from "./index.vue";

export default {
    title: "organisms/ManageMemberListItem",
    component: { ManageMemberListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ManageMemberListItem },
    template: `<ManageMemberListItem />`
});