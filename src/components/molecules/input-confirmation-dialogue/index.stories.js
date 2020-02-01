import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { InputConfirmationDialogue },
    template: `<InputConfirmationDialogue />`
});