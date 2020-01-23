
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseEditableText from "./index.vue";

export default {
    title:"atoms/BaseEditableText",
    component: {BaseEditableText}
};

export const Basic = () => ({
    components:{BaseEditableText},
    template: `<BaseEditableText width="100vw" height="30vh" />`
});