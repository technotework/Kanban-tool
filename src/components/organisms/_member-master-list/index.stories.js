
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import MemberMasterList from "./index.vue";

export default {
    title: "organisms/MemberMasterList",
    component: { MemberMasterList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { MemberMasterList },
    template: `<MemberMasterList />`
});