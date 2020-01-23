
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseHeading from "./index.vue";

export default {
    title:"atoms/BaseHeading",
    component: {BaseHeading}
};

export const Basic = () => ({
    components:{BaseHeading},
    template: `<BaseHeading />`
});