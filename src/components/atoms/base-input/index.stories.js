
import { action, styled, withKnobs, text, color, number, boolean, withInfo } from "@/components/utils/story-export"
import BaseInput from "./index.vue";
import { SystemInput } from "./compose";

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
        height: { default: text("height", "auto") },
        round: { default: text("round", "0") },
        padding: { default: text("padding", "10px") },
        name: { default: text("name", "text-input") },
        required: { default: boolean("required", false) },
        maxlength: { default: text("maxlength", "100") },
        placeholder: { default: text("placeholder", "please input") },
    },
    template: `<BaseInput v-bind={width,height,round,padding,required,placeholder,maxlength,name} @input="action" />`,
    methods: { action: action('input') }
});

export const Input = () => ({
    components: { SystemInput },
    props: {
        width: { default: text("width", "200px") },
        height: { default: text("height", "auto") },
        name: { default: text("name", "text-input") },
        required: { default: boolean("required", false) },
        maxlength: { default: text("maxlength", "100") },
        placeholder: { default: text("placeholder", "please input") },
    },
    template: `<SystemInput v-bind={width,required,placeholder,maxlength,name} @input="action" />`,
    methods: { action: action('input') }
});