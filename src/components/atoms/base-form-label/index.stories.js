
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseFormLabel from "./index.vue";

export default {
    title:"atoms/BaseFormLabel",
    component: {BaseFormLabel}
};

export const Basic = () => ({
    components:{BaseFormLabel},
    template: `<BaseFormLabel />`
});