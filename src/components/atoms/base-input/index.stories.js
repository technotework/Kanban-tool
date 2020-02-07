import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import BaseInput from "./index.vue";
import {
    SystemInput,
    SystemPassword,
    EditInput
} from "./compose";

let description = 'import BaseInput from "@/components/atoms/base-input/"<br>import { SystemInput,SystemPassword, EditInput } from "@/components/atoms/base-input/compose"';
export default createDefStory("atoms/BaseInput", BaseInput, description);


//---------------------
//Basic
let setting = {
    name: "BaseInput",
    compos: {
        BaseInput: BaseInput
    },
    props: {
        value: "",
        placeholder: "inputText",
        required: false,
        maxlength: "100",
        name: "input",
        compose: "normal",
        type: "text",
        readonly: false
    },
    action: {
        event: "input"
    },
    template: tagTemp `<BaseInput ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));



//---------------------
//System
let settingS = {
    name: "SystemInput",
    compos: {
        SystemInput: SystemInput
    },
    props: {
        placeholder: "テキストを入力",
        required: false,
        maxlength: "100",
        name: "input",
        readonly: false,
        value: "Text"
    },
    action: {
        event: "input"
    },
    template: tagTemp `<SystemInput ${'props'} ${'action'} />`
};

export const Input = () => (createStory(settingS));

//---------------------
//System
let settingPW = {
    name: "SystemPassword",
    compos: {
        SystemPassword: SystemPassword
    },
    props: {
        placeholder: "パスワードを入力",
        required: false,
        maxlength: "100",
        name: "input",
        readonly: false,
        value: "Text"
    },
    action: {
        event: "input"
    },
    template: tagTemp `<SystemPassword ${'props'} ${'action'} />`
};

export const Password = () => (createStory(settingPW));


//---------------------
//Edit
let settingE = {
    name: "EditInput",
    compos: {
        EditInput: EditInput
    },
    props: {
        placeholder: "InputText",
        required: false,
        maxlength: "100",
        name: "input",
        readonly: true,
        value: "Text"
    },
    action: {
        event: "input"
    },
    template: tagTemp `<EditInput ${'props'} ${'action'} />`
};

export const Edit = () => (createStory(settingE));