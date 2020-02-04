
import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseModelessContainer from "./index.vue";

let description = 'import BaseModelessContainer from "@/components/atoms/base-modeless-container/"';
export default createDefStory("atoms/BaseModelessContainer", BaseModelessContainer, description);

//---------------------
//Basic
let setting = {
    name: "BaseModelessContainer",
    compos: { BaseModelessContainer: BaseModelessContainer },
    props: {},
    action: {},
    template: tagTemp`<BaseModelessContainer ${'props'} ${'action'}>Contents</BaseModelessContainer>`
};

export const Basic = () => (createStory(setting));

