
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseIcon from "./index.vue";

export default {
    title:"atoms/BaseIcon",
    component: {BaseIcon}
};

export const Basic = () => ({
    components:{BaseIcon},
    template: `<BaseIcon />`
});