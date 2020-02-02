import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseModalContainer from "./index.vue";
import { Dialogue } from "./compose";


export default createDefStory("atoms/BaseModalContainer", BaseModalContainer);


let propsObj = {

    w: "320px",
    mh: "200px",
    index: "90000",
    t: "0",
    l: "0"
}

let actionObj = {

}

export const Basic = () => (createStory(BaseModalContainer, "BaseModalContainer", propsObj, actionObj, true, "Contents"));

let propsObjSub = {

}

export const ModalDialogue = () => (createStory(Dialogue, "Dialogue", propsObjSub, actionObj, true, "Contents"));