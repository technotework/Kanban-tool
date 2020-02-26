import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import OverlayLoader from "./index.vue";

let description = 'import OverlayLoader from "@/components/molecules/overlay-loader/"';
export default createDefStory("molecules/OverlayLoader", OverlayLoader, description);


//---------------------
//Basic
let setting = {
    name: "OverlayLoader",
    compos: { OverlayLoader: OverlayLoader },
    props: {},
    action: {},
    template: tagTemp`<OverlayLoader ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));


