import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseModalCover from "./index.vue";

export default createDefStory("atoms/BaseModalCover", BaseModalCover);


let propsObj = {

    index: "9000"
}

let actionObj = {

    event: "base-modal-cover-click-event"
}

export const Basic = () => (createStory(BaseModalCover, "BaseModalCover", propsObj, actionObj, true, "Content"));


