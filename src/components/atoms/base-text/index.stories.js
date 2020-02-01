import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseText from "./index.vue";
import { CaptionText, BaseMessage, ErrorMessage, WarnMessage, NormalMessage } from "./compose";

export default {
    title: "atoms/BaseText",
    component: { BaseText },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseText },
    props: {
        padding: { default: text("padding", "10px") },
        backgroundColor: { default: color("backgroundColor", "transparent") },
        color: { default: color("color", "#000") },
        width: { default: text("width", "auto") },
        minWidth: { default: text("minWidth", "auto") }
    },
    template: `<BaseText :padding="padding" :backgroundColor="backgroundColor" :color="color" :width="width" :minWidth="minWidth">あいうえお</BaseText>`
});

export const Caption = () => ({
    components: { CaptionText },
    template: `<CaptionText>あいうえお</CaptionText>`
});

export const Message = () => ({
    components: { BaseMessage },
    props: {
        backgroundColor: { default: color("backgroundColor", "#ff0") },
        color: { default: color("color", "#000") },
    },
    template: `<BaseMessage :backgroundColor="backgroundColor" :color="color">あいうえお</BaseMessage>`
});

export const Error = () => ({
    components: { ErrorMessage },
    template: `<ErrorMessage>あいうえお</ErrorMessage>`
});

export const Warn = () => ({
    components: { WarnMessage },
    template: `<WarnMessage>あいうえお</WarnMessage>`
});

export const Normal = () => ({
    components: { NormalMessage },
    template: `<NormalMessage>あいうえお</NormalMessage>`
});