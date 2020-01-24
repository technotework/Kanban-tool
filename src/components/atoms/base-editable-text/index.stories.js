
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseEditableText from "./index.vue";

export default {
    title:"atoms/BaseEditableText",
    component: {BaseEditableText}
};

export const Basic = () => ({
    components:{BaseEditableText,Theme},
    template: `<Theme><BaseEditableText width="100vw" height="30vh" /></Theme>`
});