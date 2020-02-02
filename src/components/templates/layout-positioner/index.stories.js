import { createDefStory, createStory } from "@/components/utils/story-creator"
import LayoutPositioner from "./index.vue"

export default createDefStory("templates/LayoutPositioner", LayoutPositioner);


let propsObj = {

    pt: "100px",
    pl: "100px",
    compose: "absolute",
    index: "9999"
}

let actionObj = {
}

let content = `<div style="background-color:#ff0; width:50px; height:50px;">box</div>`;

export const Basic = () => (createStory(LayoutPositioner, "LayoutPositioner", propsObj, actionObj, true, content));



