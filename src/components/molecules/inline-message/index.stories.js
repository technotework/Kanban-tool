import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { InlineMessage },
    template: `<InlineMessage />`
});