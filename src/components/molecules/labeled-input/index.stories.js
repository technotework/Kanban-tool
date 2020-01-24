
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import LabeledInput from "./index.vue";

export default {
    title:"molecules/LabeledInput",
    component: {LabeledInput}
};

export const Basic = () => ({
    components:{LabeledInput,Theme},
    template: `<Theme><LabeledInput /></Theme>`
});