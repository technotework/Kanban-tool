import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import TwoColumnRepeatGrid from "./index.vue";

const description =
    'import TwoColumnRepeatGrid from "@/components/templates/two-column-repat-grid/"';
export default createDefStory(
    "templates/TwoColumnRepeatGrid",
    TwoColumnRepeatGrid,
    description
);

//---------------------
//Basic
const setting = {
    name: "TwoColumnRepeatGrid",
    compos: {
        TwoColumnRepeatGrid: TwoColumnRepeatGrid
    },
    props: {},
    action: {},
    template: tagTemp`<TwoColumnRepeatGrid ${"props"} ${"action"}>
        <div style="background-color:#ff0; width:100%; margin-right:5px; ">1</div>
        <div style="background-color:#ff0; width:100%; margin-right:5px;">2</div>
        <div style="background-color:#ff0; width:100%;  margin-right:5px; ">3</div>
        <div style="background-color:#ff0; width:100%; margin-right:5px;">4</div>
        <div style="background-color:#ff0; width:100%;  margin-right:5px; ">5</div>
        <div style="background-color:#ff0; width:100%; margin-right:5px;">6</div>
    </TwoColumnRepeatGrid>`
};

export const Basic = () => createStory(setting);
