
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { MemberMasterPage, Theme },
    template: `<Theme><MemberMasterPage /></Theme>`
});