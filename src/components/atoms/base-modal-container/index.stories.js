
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import BaseModalContainer from "./index.vue";
import { Dialogue } from "./compose";

export default {
    title: "atoms/BaseModalContainer",
    component: { BaseModalContainer },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseModalContainer },
    template: `<BaseModalContainer>内容</BaseModalContainer>`
});

export const ModalDialogue = () => ({
    components: { Dialogue },
    template: `<Dialogue>内容</Dialogue>`
});