import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator"
import FlexLayout from "./index.vue";

let description = 'import FlexLayout from "@/components/templates/flex-layout/"';
export default createDefStory("templates/FlexLayout", FlexLayout, description);

//---------------------
//Basic
let setting = {
    name: "FlexLayout",
    compos: { FlexLayout: FlexLayout },
    props: {},
    action: {},
    template: tagTemp`<FlexLayout ${'props'} ${'action'}>
        <div style="background-color:#ff0; width:50px; height:50px; margin-right:5px;">box</div>
        <div style="background-color:#ff0; width:50px; height:50px; margin-right:5px;">box</div>
        <div style="background-color:#ff0; width:50px; height:50px; margin-right:5px;">box</div>
    </FlexLayout>`
};

export const Basic = () => (createStory(setting));

