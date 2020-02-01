
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import PasswordResetPage from "./index.vue";

export default {
    title: "pages/PasswordResetPage",
    component: { PasswordResetPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { PasswordResetPage, Theme },
    template: `<Theme><PasswordResetPage /></Theme>`
});