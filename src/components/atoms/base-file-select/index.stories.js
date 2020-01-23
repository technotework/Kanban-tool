
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseFileSelect from "./index.vue";

export default {
    title:"atoms/BaseFileSelect",
    component: {BaseFileSelect}
};

export const Basic = () => ({
    components:{BaseFileSelect},
    template: `<BaseFileSelect />`
});