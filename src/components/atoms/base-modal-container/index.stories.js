
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { BaseModalContainer, Theme },
    template: `<Theme><BaseModalContainer>内容</BaseModalContainer></Theme>`
});

export const ModalDialogue = () => ({
    components: { Dialogue, Theme },
    template: `<Theme><Dialogue>内容</Dialogue></Theme>`
});