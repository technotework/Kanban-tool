
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import ManageMemberPage from "./index.vue";

export default {
    title: "pages/ManageMemberPage",
    component: { ManageMemberPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ManageMemberPage, Theme },
    template: `<Theme><ManageMemberPage /></Theme>`
});