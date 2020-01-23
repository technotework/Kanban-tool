
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseTimeText from "./index.vue";

export default {
    title:"atoms/BaseTimeText",
    component: {BaseTimeText}
};

export const Basic = () => ({
    components:{BaseTimeText},
    template: `<BaseTimeText />`
});