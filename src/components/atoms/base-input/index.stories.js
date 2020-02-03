import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseInput from "./index.vue";
import { SystemInput } from "./compose";

export default createDefStory("atoms/BaseInput", BaseInput);


//---------------------
//Basic
let setting = {
    name: "BaseInput",
    compos: { BaseInput: BaseInput },
    props: {
        placeholder: "inputText",
        required: false,
        maxlength: "100",
        name: "input",
        compose: "normal"
    },
    action: { event: "input" },
    template: tagTemp`<BaseInput ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));



//---------------------
//System
let settingS = {
    name: "SystemInput",
    compos: { SystemInput: SystemInput },
    props: {
        placeholder: "テキストを入力",
        required: false,
        maxlength: "100",
        name: "input"
    },
    action: { event: "input" },
    template: tagTemp`<SystemInput ${'props'} ${'action'} />`
};

export const System = () => (createStory(settingS));

