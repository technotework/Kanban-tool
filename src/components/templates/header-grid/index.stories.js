import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import HeaderGrid from "./index.vue";

const description =
    'import HeaderGrid from "@/components/templates/header-grid/"';
export default createDefStory("templates/HeaderGrid", HeaderGrid, description);

//---------------------
//Basic
const setting = {
    name: "HeaderGrid",
    compos: { HeaderGrid: HeaderGrid },
    props: {},
    action: {},
    template: tagTemp`<HeaderGrid ${"props"} ${"action"}>
        
    <template #unit1>
        <div style="background-color:#ff0; width:166px; height:34px;">box</div>
    </template>

    <template #unit2>
        <div style="background-color:#ff0; width:100%; height:24px;">box</div>
    </template>

    <template #unit3>
        <div style="background-color:#ff0; width:145px; height:45px;">box</div>
    </template>

    <template #unit4>
        <div style="background-color:#ff0; width:72px; height:25px;">box</div>
    </template>
    
    </HeaderGrid>`
};

export const Basic = () => createStory(setting);
