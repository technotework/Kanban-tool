import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import BaseModelessContainer from "./index.vue";

const description =
    'import BaseModelessContainer from "@/components/atoms/base-modeless-container/"';
export default createDefStory(
    "atoms/BaseModelessContainer",
    BaseModelessContainer,
    description
);

//---------------------
//Basic
const setting = {
    name: "BaseModelessContainer",
    compos: { BaseModelessContainer: BaseModelessContainer },
    props: {},
    action: {},
    template: tagTemp`<BaseModelessContainer ${"props"} ${"action"}>Contents</BaseModelessContainer>`
};

export const Basic = () => createStory(setting);
