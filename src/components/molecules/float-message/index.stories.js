import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import FloatMessage from "./index.vue";

export default {
    title: "molecules/FloatMessage",
    component: { FloatMessage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { FloatMessage, Theme },
    template: `<Theme><FloatMessage /></Theme>`
});