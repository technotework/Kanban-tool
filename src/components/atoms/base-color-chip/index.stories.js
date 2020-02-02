import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseColorChip from "./index.vue";


export default createDefStory("atoms/BaseColorChip", BaseColorChip);

let propsObj = {

    w: "100px",
    h: "100px",
    bgc: "#f00",
}

let actionObj = {
}

export const Basic = () => (createStory(BaseColorChip, "BaseColorChip", propsObj, actionObj, false));