
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseLinkButton from "./index.vue";

export default {
    title:"atoms/BaseLinkButton",
    component: {BaseLinkButton}
};

export const Basic = () => ({
    components:{BaseLinkButton},
    template: `<BaseLinkButton />`
});