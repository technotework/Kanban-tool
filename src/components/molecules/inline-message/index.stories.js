import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import InlineMessage from "./index.vue";

export default {
    title: "molecules/InlineMessage",
    component: { InlineMessage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { InlineMessage, Theme },
    template: `<Theme><InlineMessage /></Theme>`
});