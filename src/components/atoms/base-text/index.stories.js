import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseText from "./index.vue";
import { CaptionText, ErrorText, WarnText, NormalText } from "./compose";

export default createDefStory("atoms/BaseText", BaseText);

//---------------------
//Basic
let setting = {
    name: "BaseText",
    compos: { BaseText: BaseText },
    props: {
        compose: "contents"
    },
    action: {},
    template: tagTemp`<BaseText ${'props'} ${'action'}>テキスト</BaseText>`
};

export const Basic = () => (createStory(setting));


//---------------------
//Caption
let settingC = {
    name: "CaptionText",
    compos: { CaptionText: CaptionText },
    props: {
        compose: "normal"
    },
    action: {},
    template: tagTemp`<CaptionText ${'props'} ${'action'}>テキスト</CaptionText>`
};

export const Caption = () => (createStory(settingC));


//---------------------
//Caption
let settingE = {
    name: "ErrorText",
    compos: { ErrorText: ErrorText },
    props: {},
    action: {},
    template: tagTemp`<ErrorText ${'props'} ${'action'}>テキスト</ErrorText>`
};

export const Error = () => (createStory(settingE));


//---------------------
//Warn
let settingW = {
    name: "WarnText",
    compos: { WarnText: WarnText },
    props: {},
    action: {},
    template: tagTemp`<WarnText ${'props'} ${'action'}>テキスト</WarnText>`
};

export const Warn = () => (createStory(settingW));


//---------------------
//Warn
let settingN = {
    name: "NormalText",
    compos: { NormalText: NormalText },
    props: {},
    action: {},
    template: tagTemp`<NormalText ${'props'} ${'action'}>テキスト</NormalText>`
};

export const Normal = () => (createStory(settingN));

