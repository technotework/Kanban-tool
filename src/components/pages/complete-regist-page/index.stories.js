
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import CompleteRegistPage from "./index.vue";

export default {
    title: "pages/CompleteRegistPage",
    component: { CompleteRegistPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { CompleteRegistPage },
    template: `<CompleteRegistPage />`
});