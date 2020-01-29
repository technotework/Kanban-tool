import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { BaseText, Theme },
    props: {
        padding: { default: text("padding", "10px") },
        backgroundColor: { default: color("backgroundColor", "transparent") },
        color: { default: color("color", "#000") },
        width: { default: text("width", "auto") },
        minWidth: { default: text("minWidth", "auto") }
    },
    template: `<Theme><BaseText :padding="padding" :backgroundColor="backgroundColor" :color="color" :width="width" :minWidth="minWidth">あいうえお</BaseText></Theme>`
});

export const Caption = () => ({
    components: { CaptionText, Theme },
    template: `<Theme><CaptionText>あいうえお</CaptionText></Theme>`
});

export const Message = () => ({
    components: { BaseMessage, Theme },
    props: {
        backgroundColor: { default: color("backgroundColor", "#ff0") },
        color: { default: color("color", "#000") },
    },
    template: `<Theme><BaseMessage :backgroundColor="backgroundColor" :color="color">あいうえお</BaseMessage></Theme>`
});

export const Error = () => ({
    components: { ErrorMessage, Theme },
    template: `<Theme><ErrorMessage>あいうえお</ErrorMessage></Theme>`
});

export const Warn = () => ({
    components: { WarnMessage, Theme },
    template: `<Theme><WarnMessage>あいうえお</WarnMessage></Theme>`
});

export const Normal = () => ({
    components: { NormalMessage, Theme },
    template: `<Theme><NormalMessage>あいうえお</NormalMessage></Theme>`
});