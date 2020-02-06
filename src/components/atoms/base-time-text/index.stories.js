import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator"
import BaseTimeText from "./index.vue";
import DateText from "./date-text.vue";
import DateTimeText from "./date-time-text.vue";


let description = 'import DateText from "@/components/atoms/base-time-text/date-text"<br>import DateTimeText from "@/components/atoms/base-time-text/date-time-text"'
export default createDefStory("atoms/BaseTimeText", BaseTimeText, description);



//---------------------
//DateText
let setting = {
    name: "DateText",
    compos: {
        DateText
    },
    props: {
        date: "1560000000"
    },
    action: {
    },
    template: tagTemp `<DateText ${"props"} ${"ac¡tion"} />`
};

export const Date = () => (createStory(setting));


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
    action: {
    },
    template: tagTemp `<DateTimeText ${"props"} ${"ac¡tion"} />`
};

export const DateTime = () => (createStory(settingD));

