import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseText from "./index.vue";
import { CaptionText, ErrorText, WarnText, NormalText } from "./compose";

export default createDefStory("atoms/BaseText", BaseText);


let propsObj = {

    p: "10px",
    bgc: "transparent",
    color: "#000",
    w: "auto",
    mw: "auto",
}

let actionObj = {}

export const Basic = () => (createStory(BaseText, "BaseText", propsObj, actionObj, true, "あいうえお"));

let propsObjSub = {
}

export const Caption = () => (createStory(CaptionText, "CaptionText", propsObjSub, actionObj, true, "あいうえお"));

export const Error = () => (createStory(ErrorText, "ErrorText", propsObjSub, actionObj, true, "あいうえお"));

export const Warn = () => (createStory(WarnText, "WarnText", propsObjSub, actionObj, true, "あいうえお"));

export const Normal = () => (createStory(NormalText, "NormalText", propsObjSub, actionObj, true, "あいうえお"));

/*
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
});*/