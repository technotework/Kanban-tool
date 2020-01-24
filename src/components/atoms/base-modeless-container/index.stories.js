
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseModelessContainer from "./index.vue";

export default {
    title:"atoms/BaseModelessContainer",
    component: {BaseModelessContainer}
};

export const Basic = () => ({
    components:{BaseModelessContainer,Theme},
    template: `<Theme><BaseModelessContainer /></Theme>`
});