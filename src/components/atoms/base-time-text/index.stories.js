import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseTimeText from "./index.vue";
import DateText from "./date-text.vue";
import DateTimeText from "./date-time-text.vue";

export default {
    title: "atoms/BaseTimeText",
    component: { BaseTimeText }
};


export const Date = () => ({
    components: { DateText },
    template: `<DateText date="1560000000" />`
});

export const DateTime = () => ({
    components: { DateTimeText },
    template: `<DateTimeText date="1560000000" />`
});