import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseButton from "./index.vue";

export default {
    title:"atoms/BaseButton",
    component: {BaseButton},
};

export const Basic = () => ({
    components:{BaseButton},
    template: `<BaseButton value="myButton" @click="action" />`,
    methods: { action: action('click') }
});