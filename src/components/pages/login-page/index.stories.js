
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import LoginPage from "./index.vue";

export default {
    title: "pages/LoginPage",
    component: { LoginPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LoginPage, Theme },
    template: `<Theme><LoginPage /></Theme>`
});