import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import IconedButton from "./index.vue";


let description = 'import IconedButton from "@/components/molecules/iconed-text-button/"'
export default createDefStory("molecules/IconedButton", IconedButton, description);

//---------------------
//Basic
let setting = {
    name: "IconedButton",
    compos: { IconedButton: IconedButton },
    props: {
        type: "plusmini"
    },
    action: { event: "click" },
    template: tagTemp`<div style="background-color:#fff; padding:100px"><IconedButton ${'props'} ${'action'} /></div>`
};

export const Basic = () => (createStory(setting));

