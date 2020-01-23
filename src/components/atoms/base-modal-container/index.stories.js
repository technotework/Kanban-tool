
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseModalContainer from "./index.vue";

export default {
    title:"atoms/BaseModalContainer",
    component: {BaseModalContainer}
};

export const Basic = () => ({
    components:{BaseModalContainer},
    template: `<BaseModalContainer />`
});