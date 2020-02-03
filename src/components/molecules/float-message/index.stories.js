import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
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
    components: { FloatMessage },
    template: `<FloatMessage />`
});