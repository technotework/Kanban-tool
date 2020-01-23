
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import InputCheckbox from "./index.vue";

export default {
    title:"molecules/InputCheckbox",
    component: {InputCheckbox}
};

export const Basic = () => ({
    components:{InputCheckbox},
    template: `<InputCheckbox />`
});