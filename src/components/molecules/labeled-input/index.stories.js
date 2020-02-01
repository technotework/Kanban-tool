import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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