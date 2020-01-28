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
    template: `<Theme><BaseEditableText width="100vw" height="30vh" /></Theme>`
});