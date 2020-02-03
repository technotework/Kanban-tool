import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import LabeledInput from "./index.vue";

export default {
    title: "molecules/LabeledInput",
    component: { LabeledInput },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LabeledInput },
    template: `<LabeledInput />`
});