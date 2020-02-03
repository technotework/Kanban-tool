
import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import BaseModelessContainer from "./index.vue";

export default createDefStory("atoms/BaseModelessContainer", BaseModelessContainer);

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

