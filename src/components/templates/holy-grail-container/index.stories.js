import { createDefStory, createStory } from "@/components/utils/story-creator"
import HolyGrailContainer from "./index.vue";

export default createDefStory("templates/HolyGrailContainer", HolyGrailContainer);


let propsObj = {

    w: "100vw",
    h: "auto",
    bgc: "#ccc"
}

let actionObj = {
}

export const Basic = () => (createStory(HolyGrailContainer, "HolyGrailContainer", propsObj, actionObj, true));