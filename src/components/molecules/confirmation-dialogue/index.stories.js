import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import ConfirmationDialogue from "./index.vue";

export default {
    title: "molecules/ConfirmationDialogue",
    component: { ConfirmationDialogue },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ConfirmationDialogue, Theme },
    props: {
    },
    template: `<Theme><ConfirmationDialogue >
    メッセージ
    </ConfirmationDialogue></Theme>`,
});