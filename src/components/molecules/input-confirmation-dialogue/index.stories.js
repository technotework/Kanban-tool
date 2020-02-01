import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import InputConfirmationDialogue from "./index.vue";

export default {
    title: "molecules/InputConfirmationDialogue",
    component: { InputConfirmationDialogue },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { InputConfirmationDialogue, Theme },
    template: `<Theme><InputConfirmationDialogue /></Theme>`
});