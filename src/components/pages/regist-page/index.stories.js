
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import RegistPage from "./index.vue";

export default {
    title: "pages/RegistPage",
    component: { RegistPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { RegistPage, Theme },
    template: `<Theme><RegistPage /></Theme>`
});