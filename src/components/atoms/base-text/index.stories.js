
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseText from "./index.vue";

export default {
    title:"atoms/BaseText",
    component: {BaseText}
};

export const Basic = () => ({
    components:{BaseText,Theme},
    template: `<Theme><BaseText /></Theme>`
});