
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    props: {
        width: { default: text("width", "320px") },
        minHeight: { default: text("minHeight", "200px") },
        index: { default: text("index", "900000") },
        top: { default: text("top", "0") },
        left: { default: text("left", "0") },
        compose: { default: text("compose", "none") },
    },
    template: `<BaseModalContainer v-bind="{compose,width,minHeight,index,top,left}">内容</BaseModalContainer>`
});

export const ModalDialogue = () => ({
    components: { Dialogue },
    template: `<Dialogue>内容</Dialogue>`
});