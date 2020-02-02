import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseImage from "./index.vue";

export default createDefStory("atoms/BaseImage", BaseImage);


let propsObj = {

    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
    w: "200px",
    h: "auto",
    r: "8px",
    alt: "cat"
}

let actionObj = {
    event: "click"
}

export const Basic = () => (createStory(BaseImage, "BaseImage", propsObj, actionObj, false));

