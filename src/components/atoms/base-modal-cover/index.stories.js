import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import BaseModalCover from "./index.vue";

export default createDefStory("atoms/BaseModalCover", BaseModalCover);

//---------------------
//Basic
const setting = {
    name: "BaseModalCover",
    compos: { BaseModalCover: BaseModalCover },
    props: {},
    action: { event: "base-modal-cover-click-event" },
    template: tagTemp`<BaseModalCover ${"props"} ${"action"} />`
};

export const Basic = () => createStory(setting);
