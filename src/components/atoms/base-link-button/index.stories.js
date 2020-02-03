import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseLinkButton from "./index.vue";
import { PrimaryButton, SecondaryButton } from "./compose";

export default createDefStory("atoms/BaseLinkButton", BaseLinkButton);


//---------------------
//Basic
let setting = {
    name: "BaseLinkButton",
    compos: { BaseLinkButton: BaseLinkButton },
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    action: { event: "click" },
    template: tagTemp`<BaseLinkButton ${'props'} ${'action'}>Button</BaseLinkButton>`
};

export const Basic = () => (createStory(setting));


//---------------------
//PrimaryButton

let settingP = {
    name: "PrimaryButton",
    compos: { PrimaryButton: PrimaryButton },
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    action: { event: "click" },
    template: tagTemp`<PrimaryButton ${'props'} ${'action'}>Button</PrimaryButton>`
};

export const Primary = () => (createStory(settingP));



//---------------------
//PrimaryButton

let settingS = {
    name: "SecondaryButton",
    compos: { SecondaryButton: SecondaryButton },
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    action: { event: "click" },
    template: tagTemp`<SecondaryButton ${'props'} ${'action'}>Button</SecondaryButton>`
};

export const Secondary = () => (createStory(settingS));


