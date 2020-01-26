
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
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