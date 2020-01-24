
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseModalContainer from "./index.vue";

export default {
    title:"atoms/BaseModalContainer",
    component: {BaseModalContainer}
};

export const Basic = () => ({
    components:{BaseModalContainer,Theme},
    template: `<Theme><BaseModalContainer /></Theme>`
});