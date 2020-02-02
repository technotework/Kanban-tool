import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseLinkButton from "./index.vue";
import { PrimaryButton, SecondaryButton } from "./compose";

export default createDefStory("atoms/BaseLinkButton", BaseLinkButton);


let propsObj = {

    w: "150px",
    h: "auto",
    href: "https://www.google.com/",
    target: "_blank"
}

let actionObj = {
}

export const Basic = () => (createStory(BaseLinkButton, "BaseLinkButton", propsObj, actionObj, true, "Button"));

export const Primary = () => (createStory(PrimaryButton, "PrimaryButton", propsObj, actionObj, true, "Button"));

export const Secondary = () => (createStory(SecondaryButton, "SecondaryButton", propsObj, actionObj, true, "Button"));


