
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseTimeText from "./index.vue";

export default {
    title:"atoms/BaseTimeText",
    component: {BaseTimeText}
};

export const Basic = () => ({
    components:{BaseTimeText,Theme},
    template: `<Theme><BaseTimeText /></Theme>`
});