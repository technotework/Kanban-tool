
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseMarkdownContainer from "./index.vue";

export default {
    title:"atoms/BaseMarkdownContainer",
    component: {BaseMarkdownContainer}
};

export const Basic = () => ({
    components:{BaseMarkdownContainer,Theme},
    template: `<Theme><BaseMarkdownContainer /></Theme>`
});