import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { BaseEditableText },
    props: {
        width: { default: text("width", "100%") },
        height: { default: text("height", "200px") },
        padding: { default: text("padding", "10px") }
    },
    template: `<BaseEditableText :width="width" :height="height" :padding="padding" />`
});