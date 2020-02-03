
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { PasswordResetPage },
    template: `<PasswordResetPage />`
});