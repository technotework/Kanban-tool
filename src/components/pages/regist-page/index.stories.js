
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { RegistPage },
    template: `<RegistPage />`
});