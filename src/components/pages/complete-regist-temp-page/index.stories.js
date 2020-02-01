
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import CompleteRegistTempPage from "./index.vue";

export default {
    title: "pages/CompleteRegistTempPage",
    component: { CompleteRegistTempPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { CompleteRegistTempPage },
    template: `<CompleteRegistTempPage />`
});