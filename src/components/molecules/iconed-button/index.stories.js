import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import IconedButton from "./index.vue";


let description = 'import IconedButton from "@/components/molecules/iconed-button/"'
export default createDefStory("molecules/IconedButton", IconedButton, description);

//---------------------
//Basic
let setting = {
    name: "IconedButton",
    compos: {
        IconedButton: IconedButton
    },
    props: {
        type: "add"
    },
    action: {
        event: "click"
    },
    template: tagTemp `<IconedButton ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));