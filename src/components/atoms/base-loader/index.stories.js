import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import BaseLoader from "./index.vue";

const description = 'import BaseLoader from "@/components/atoms/base-loader/"';
export default createDefStory("atoms/BaseLoader", BaseLoader, description);

//---------------------
//Basic
const setting = {
    name: "BaseLoader",
    compos: { BaseLoader: BaseLoader },
    props: {},
    action: {},
    template: tagTemp`<BaseLoader ${"props"} ${"action"} />`
};

export const Basic = () => createStory(setting);
