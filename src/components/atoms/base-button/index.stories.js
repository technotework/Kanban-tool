import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseButton from "@/components/atoms/base-button/"
import { PrimaryButton, SaveButton, SecondaryButton, MenuButton } from "./compose"

export default createDefStory("atoms/BaseButton", BaseButton);


let propsObj = {

    value: "myButton",
    name: "buton",
    compose: "primary"
}

let actionObj = {
    event: "click"
}

let temp1 = tagTemp`<BaseButton ${'props'} ${'action'} />`

export const Basic = () => (createStory(BaseButton, "BaseButton", propsObj, actionObj, temp1));


let propsObjSub = {

    name: "buton",
}

let temp2 = tagTemp`<PrimaryButton ${'props'} ${'action'} />`

export const Primary = () => (createStory(PrimaryButton, "PrimaryButton", propsObjSub, actionObj, temp2));

let temp3 = tagTemp`<SaveButton ${'props'} ${'action'} />`

export const Save = () => (createStory(SaveButton, "SaveButton", propsObjSub, actionObj, temp3));

let temp4 = tagTemp`<SecondaryButton ${'props'} ${'action'} />`

export const Secondary = () => (createStory(SecondaryButton, "SecondaryButton", propsObjSub, actionObj, temp4));

let propsObjSub2 = {

    w: "200px",
    name: "buton",
    value: "menu"
}

export const Menu = () => (createStory(MenuButton, "MenuButton", propsObjSub2, actionObj, false));
