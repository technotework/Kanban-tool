import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import BaseTimeText from "./index.vue";
import DateTimeText from "./date-time-text.vue";

const description =
    'import DateTimeText from "@/components/atoms/base-time-text/date-time-text"';
export default createDefStory("atoms/BaseTimeText", BaseTimeText, description);

//---------------------
//DateText
let settingD = {
    name: "DateTimeText",
    compos: {
        DateTimeText
    },
    props: {
        date: "1560000000"
    },
    action: {},
    template: tagTemp`<DateTimeText ${"props"} ${"action"} />`
};

export const DateTime = () => createStory(settingD);
