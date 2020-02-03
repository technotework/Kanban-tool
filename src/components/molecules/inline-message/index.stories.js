import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
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