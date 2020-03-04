import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseText from "./index.vue";
import { ErrorText } from "./compose";

let description = 'import BaseText from "@/components/atoms/base-text/"';
export default createDefStory("atoms/BaseText", BaseText, description);

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
let settingE = {
    name: "ErrorText",
    compos: { ErrorText: ErrorText },
    props: {},
    action: {},
    template: tagTemp`<ErrorText ${'props'} ${'action'}>テキスト</ErrorText>`
};

export const Error = () => (createStory(settingE));

