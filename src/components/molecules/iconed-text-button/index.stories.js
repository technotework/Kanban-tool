import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import IconedTextButton from "./index.vue";

const description =
    'import IconedTextButton from "@/components/molecules/iconed-text-button/"';
export default createDefStory(
    "molecules/IconedTextButton",
    IconedTextButton,
    description
);

//---------------------
//Basic
const setting = {
    name: "IconedTextButton",
    compos: { IconedTextButton: IconedTextButton },
    props: {
        type: "plus",
        compose: "left"
    },
    action: { event: "click" },
    template: tagTemp`<IconedTextButton ${"props"} ${"action"}>NewBoard</IconedTextButton>`
};

export const Basic = () => createStory(setting);
