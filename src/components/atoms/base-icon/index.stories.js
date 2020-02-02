import { createDefStory, createStory } from "@/components/utils/story-creator"
import BaseIcon from "./index.vue"
import { IconL, IconM, IconS } from "./compose"

export default createDefStory("atoms/BaseIcon", BaseIcon);


let propsObj = {

    w: "200px",
    h: "200px",
    round: "100px",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg"
}

let actionObj = {
}

export const Basic = () => (createStory(BaseIcon, "BaseIcon", propsObj, actionObj, false));


let propsObjSub = {

    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg"
}

export const L = () => (createStory(IconL, "IconL", propsObj, actionObj, false));
export const M = () => (createStory(IconM, "IconL", propsObj, actionObj, false));
export const S = () => (createStory(IconS, "IconL", propsObj, actionObj, false));



