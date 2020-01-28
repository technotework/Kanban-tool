import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseTimeText from "./index.vue";
import DateText from "./date-text.vue";
import DateTimeText from "./date-time-text.vue";

export default {
    title: "atoms/BaseTimeText",
    component: { BaseTimeText }
};


export const Date = () => ({
    components: { DateText, Theme },
    template: `<Theme><DateText date="1560000000" /></Theme>`
});

export const DateTime = () => ({
    components: { DateTimeText, Theme },
    template: `<Theme><DateTimeText date="1560000000" /></Theme>`
});