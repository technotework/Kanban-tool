import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseIcon from "./index.vue"
import { IconL, IconM, IconS, IconSquare} from "./compose"


let description = 'import BaseIcon from "@/components/atoms/base-icon/"';
export default createDefStory("atoms/BaseIcon", BaseIcon, description);


//---------------------
//Basic
let setting = {
    name: "BaseIcon",
    compos: { BaseIcon: BaseIcon },
    props: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
        compose: "normal",
        shape: "round"
    },
    action: {},
    template: tagTemp`<BaseIcon ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));


//---------------------
//L
let settingL = {
    name: "IconL",
    compos: { IconL: IconL },
    props: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
    },
    action: {},
    template: tagTemp`<IconL ${'props'} ${'action'} />`
};

export const L = () => (createStory(settingL));


//---------------------
//M
let settingM = {
    name: "IconM",
    compos: { IconM: IconM },
    props: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
    },
    action: {},
    template: tagTemp`<IconM ${'props'} ${'action'} />`
};

export const M = () => (createStory(settingM));


//---------------------
//S
let settingS = {
    name: "IconS",
    compos: { IconS: IconS },
    props: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
    },
    action: {},
    template: tagTemp`<IconS ${'props'} ${'action'} />`
};

export const S = () => (createStory(settingS));



//---------------------
//S
let settingIconSquare = {
    name: "IconSquare",
    compos: { IconSquare: IconSquare },
    props: {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg",
    },
    action: {},
    template: tagTemp`<IconSquare ${'props'} ${'action'} />`
};

export const Square = () => (createStory(settingIconSquare));
