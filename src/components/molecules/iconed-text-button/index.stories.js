import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import IconedTextButton from "./index.vue";

export default {
    title: "molecules/IconedTextButton",
    component: { IconedTextButton },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { IconedTextButton },
    template: `<IconedTextButton />`
});