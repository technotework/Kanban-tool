
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import MemberMasterListItem from "./index.vue";

export default {
    title: "organisms/MemberMasterListItem",
    component: { MemberMasterListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { MemberMasterListItem },
    template: `<MemberMasterListItem />`
});