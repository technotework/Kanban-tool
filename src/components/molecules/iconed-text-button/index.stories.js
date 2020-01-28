import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { IconedTextButton, Theme },
    template: `<Theme><IconedTextButton /></Theme>`
});