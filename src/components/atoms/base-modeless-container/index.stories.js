
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseModelessContainer from "./index.vue";

export default {
    title:"atoms/BaseModelessContainer",
    component: {BaseModelessContainer}
};

export const Basic = () => ({
    components:{BaseModelessContainer},
    template: `<BaseModelessContainer />`
});