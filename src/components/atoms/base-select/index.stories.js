
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseSelect from "./index.vue";

export default {
    title:"atoms/BaseSelect",
    component: {BaseSelect}
};

export const Basic = () => ({
    components:{BaseSelect,Theme},
    template: `<Theme><BaseSelect /></Theme>`
});