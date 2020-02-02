import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseButton from "@/components/atoms/base-button/"
import { PrimaryButton, SaveButton, SecondaryButton } from "./compose"

export default createDefStory("atoms/BaseButton", BaseButton);


let propsObj = {

    value: "myButton",
    name: "buton",
    compose: "primary"
}

let actionObj = {
    event: "click"
}

export const Basic = () => (createStory(BaseButton, "BaseButton", propsObj, actionObj, false));


let propsObjSub = {

    name: "buton",
}

export const Primary = () => (createStory(PrimaryButton, "PrimaryButton", propsObjSub, actionObj, false));
export const Save = () => (createStory(SaveButton, "SaveButton", propsObjSub, actionObj, false));
export const Secondary = () => (createStory(SecondaryButton, "SecondaryButton", propsObjSub, actionObj, false));

