import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import HolyGrailContainer from "./index.vue";

export default createDefStory("templates/HolyGrailContainer", HolyGrailContainer);

//---------------------
//Basic
let setting = {
    name: "HolyGrailContainer",
    compos: { HolyGrailContainer: HolyGrailContainer },
    props: {},
    action: {},
    template: tagTemp`<HolyGrailContainer ${'props'} ${'action'}>Contents</HolyGrailContainer>`
};

export const Basic = () => (createStory(setting));

