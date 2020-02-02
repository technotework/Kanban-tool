import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseEditableText from "./index.vue";

export default createDefStory("atoms/BaseEditableText", BaseEditableText);

let propsObj = {

    w: "100%",
    h: "200px",
    p: "10px"
}

let actionObj = {
}

export const Basic = () => (createStory(BaseEditableText, "BaseEditableText", propsObj, actionObj, false));
