
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { BaseInput },
    props: {
        width: { default: text("width", "200px") },
        padding: { default: text("padding", "10px") },
        placeholder: { default: text("placeholder", "please input") },
    },
    template: `<BaseInput :width="width" :padding="padding" :placeholder="placeholder" @input="action" required />`,
    methods: { action: action('input') }
});