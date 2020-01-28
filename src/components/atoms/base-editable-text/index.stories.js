import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseEditableText from "./index.vue";

export default {
    title: "atoms/BaseEditableText",
    component: { BaseEditableText },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseEditableText, Theme },
    props: {
        width: { default: text("width", "100%") },
        height: { default: text("height", "200px") },
        padding: { default: text("padding", "10px") }
    },
    template: `<Theme><BaseEditableText :width="width" :height="height" :padding="padding" /></Theme>`
});