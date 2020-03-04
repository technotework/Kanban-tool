import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import BaseIcon from "./index.vue";


let description =
    'import BaseIcon from "@/components/atoms/base-icon/"';
export default createDefStory("atoms/BaseIcon", BaseIcon, description);

//---------------------
//Basic
let setting = {
    name: "BaseIcon",
    compos: {
        BaseIcon: BaseIcon
    },
    props: {
        type: "close"
    },
    action: {},
    template: tagTemp`<BaseIcon ${"props"} ${"action"} />`
};

export const Basic = () => createStory(setting);
