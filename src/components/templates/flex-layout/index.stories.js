import Vue from "vue"
import { action, styled, withKnobs, text, color, boolean, number, withInfo } from "@/components/utils/story-export"
import { createDefStory, createStory } from "@/components/utils/story-creator"
import FlexLayout from "./index.vue";

export default createDefStory("templates/FlexLayout", FlexLayout);

let propsObj = {
    w: "600px",
    h: "auto"
}

let actionObj = {}

let content = `<div style="background-color:#ff0; width:50px; height:50px; margin-right:5px;">box</div>
<div style="background-color:#ff0; width:50px; height:50px; margin-right:5px;">box</div>
<div style="background-color:#ff0; width:50px; height:50px; margin-right:5px;">box</div>`;

export const Basic = () => (createStory(FlexLayout, "FlexLayout", propsObj, actionObj, true, content));

