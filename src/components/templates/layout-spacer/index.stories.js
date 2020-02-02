import { createDefStory, createStory } from "@/components/utils/story-creator"
import Vue from "vue"
import LayoutSpacer from "./index.vue"

export default createDefStory("templates/LayoutSpacer", LayoutSpacer);

let propsObj = {

    p: "10px",
    m: "0 0 10px 0",
    w: "100px",
    h: "auto"
}

let actionObj = {
}

let content = `<div style="background-color:#ff0; width:50px; height:50px;">box</div>`;

export const Basic = () => (createStory(LayoutSpacer, "LayoutSpacer", propsObj, actionObj, true, content));


