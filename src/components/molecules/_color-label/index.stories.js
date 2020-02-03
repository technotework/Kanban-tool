import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import ColorLabel from "./index.vue";

export default {
    title: "molecules/ColorLabel",
    component: { ColorLabel },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ColorLabel },
    template: `<ColorLabel />`
});