import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseButton from "@/components/atoms/base-button/"
import { PrimaryButton, SaveButton, SecondaryButton, MenuButton } from "./compose"

export default createDefStory("atoms/BaseButton", BaseButton);

//---------------------
//Basic
let setting = {
    name: "BaseButton",
    compos: { BaseButton: BaseButton },
    props: {
        value: "myButton",
        name: "buton",
        compose: "primary"
    },
    action: { event: "click" },
    template: tagTemp`<BaseButton ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));

//---------------------
//Primary
let settingP = {
    name: "PrimaryButton",
    compos: { PrimaryButton: PrimaryButton },
    props: {
        name: "buton"
    },
    action: { event: "click" },
    template: tagTemp`<PrimaryButton ${'props'} ${'action'} />`
};

export const Primary = () => (createStory(settingP));

//---------------------
//Save

let settingS = {
    name: "SaveButton",
    compos: { SaveButton: SaveButton },
    props: {
        name: "buton"
    },
    action: { event: "click" },
    template: tagTemp`<SaveButton ${'props'} ${'action'} />`
};

export const Save = () => (createStory(settingS));

//---------------------
//Secondary

let settingSc = {
    name: "SecondaryButton",
    compos: { SecondaryButton: SecondaryButton },
    props: {
        name: "buton"
    },
    action: { event: "click" },
    template: tagTemp`<SecondaryButton ${'props'} ${'action'} />`
};

export const Secondary = () => (createStory(settingSc));

//---------------------
//Menu

let settingM = {
    name: "MenuButton",
    compos: { MenuButton: MenuButton },
    props: {
        name: "buton",
        value: "menu"
    },
    action: { event: "click" },
    template: tagTemp`<MenuButton ${'props'} ${'action'} />`
};

let tempMenu = tagTemp`<MenuButton ${'props'} ${'action'} />`
export const Menu = () => (createStory(settingM));
