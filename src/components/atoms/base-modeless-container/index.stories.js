
import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseModelessContainer from "./index.vue";

export default createDefStory("atoms/BaseModelessContainer", BaseModelessContainer);


let propsObj = {

    w: "200px",
    h: "300px",
    t: "0",
    l: "0",
    p: "10px",
    r: "8px",
    bgc: "#ccc"
}

let actionObj = {
}

export const Basic = () => (createStory(BaseModelessContainer, "BaseModelessContainer", propsObj, actionObj, true));

