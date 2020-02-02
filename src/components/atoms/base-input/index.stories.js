import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseInput from "./index.vue";
import { SystemInput } from "./compose";

export default createDefStory("atoms/BaseInput", BaseInput);


let propsObj = {

    w: "200px",
    h: "auto",
    r: "0",
    p: "10px",
    name: "text-input",
    required: false,
    maxlength: "100",
    placeholder: "please input"
}

let actionObj = {
    event: "input"
}

export const Basic = () => (createStory(BaseInput, "BaseInput", propsObj, actionObj, false));


let propsObjSub = {

    name: "text-input",
    required: false,
    maxlength: "100",
    placeholder: "please input"
}

export const Default = () => (createStory(SystemInput, "SystemInput", propsObjSub, actionObj, false));