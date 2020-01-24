
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseFileSelect from "./index.vue";

export default {
    title:"atoms/BaseFileSelect",
    component: {BaseFileSelect}
};

export const Basic = () => ({
    components:{BaseFileSelect,Theme},
    template: `<Theme><BaseFileSelect /></Theme>`
});