import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseInput from "./index.vue";
import { SystemInput,SystemPassword } from "./compose";

let description = 'import BaseInput from "@/components/atoms/base-input/"<br>import { SystemInput,SystemPassword } from "@/components/atoms/base-input/compose"';
export default createDefStory("atoms/BaseInput", BaseInput, description);


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
        compose: "normal",
        type:"text"
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

export const Input = () => (createStory(settingS));

//---------------------
//System
let settingPW = {
    name: "SystemPassword",
    compos: { SystemPassword: SystemPassword },
    props: {
        placeholder: "パスワードを入力",
        required: false,
        maxlength: "100",
        name: "input"
    },
    action: { event: "input" },
    template: tagTemp`<SystemPassword ${'props'} ${'action'} />`
};

export const Password = () => (createStory(settingPW));
