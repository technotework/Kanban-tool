
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseInput from "./index.vue";

export default {
    title:"atoms/BaseInput",
    component: {BaseInput}
};

export const Basic = () => ({
    components:{BaseInput},
    template: `<BaseInput />`
});