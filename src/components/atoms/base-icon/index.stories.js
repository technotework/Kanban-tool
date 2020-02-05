import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import BaseIcon from "./index.vue";
import {
    IconL,
    IconM,
    IconS
} from "./compose";

let description =
    'import BaseIcon from "@/components/atoms/base-icon/"<br>import { IconL, IconM, IconS } from "@/components/atoms/base-icon/compose"';
export default createDefStory("atoms/BaseIcon", BaseIcon, description);

//---------------------
//Basic
let setting = {
    name: "BaseIcon",
    compos: {
        BaseIcon: BaseIcon
    },
    props: {
        type: "close",
        compose: "normal"
    },
    action: {},
    template: tagTemp `<BaseIcon ${"props"} ${"action"} />`
};

export const Basic = () => createStory(setting);

//---------------------
//L
let settingL = {
    name: "IconL",
    compos: {
        IconL: IconL
    },
    props: {
        type: "close",
        fill: "#ddd"
    },
    action: {},
    template: tagTemp `<IconL ${"props"} ${"action"} />`
};

export const L = () => createStory(settingL);

//---------------------
//M
let settingM = {
    name: "IconM",
    compos: {
        IconM: IconM
    },
    props: {
        type: "close",
        fill: "#ddd"
    },
    action: {},
    template: tagTemp `<IconM ${"props"} ${"action"} />`
};

export const M = () => createStory(settingM);

//---------------------
//S
let settingS = {
    name: "IconS",
    compos: {
        IconS: IconS
    },
    props: {
        type: "close",
        fill: "#ddd"
    },
    action: {},
    template: tagTemp `<IconS ${"props"} ${"action"} />`
};

export const S = () => createStory(settingS);