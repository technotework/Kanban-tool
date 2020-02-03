
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import MemberMasterPage from "./index.vue";

export default {
    title: "pages/MemberMasterPage",
    component: { MemberMasterPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { MemberMasterPage },
    template: `<MemberMasterPage />`
});