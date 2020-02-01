
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import BaseInput from "./index.vue";

export default {
    title: "atoms/BaseInput",
    component: { BaseInput },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseInput, Theme },
    props: {
        width: { default: text("width", "200px") },
        padding: { default: text("padding", "10px") },
        placeholder: { default: text("placeholder", "please input") },
    },
    template: `<Theme><BaseInput :width="width" :padding="padding" :placeholder="placeholder" @input="action" required /></Theme>`,
    methods: { action: action('input') }
});