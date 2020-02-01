import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import IconedText from "./index.vue";

export default {
    title: "molecules/IconedText",
    component: { IconedText },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { IconedText },
    template: `<IconedText />`
});