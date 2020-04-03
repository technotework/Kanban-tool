import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import NavButton from "./index.vue";

const description =
    'import NavButton from "@/components/molecules/nav-button/"';
export default createDefStory("molecules/NavButton", NavButton, description);

//---------------------
//Basic
const setting = {
    name: "NavButton",
    compos: { NavButton: NavButton },
    props: {
        type: "plusmini",
        compose: "left"
    },
    action: { event: "click" },
    template: tagTemp`<NavButton ${"props"} ${"action"} >
    LOGOUT
    </NavButton>`
};

export const Basic = () => createStory(setting);
