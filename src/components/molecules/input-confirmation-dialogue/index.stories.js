
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import InputConfirmationDialogue from "./index.vue";

export default {
    title:"molecules/InputConfirmationDialogue",
    component: {InputConfirmationDialogue}
};

export const Basic = () => ({
    components:{InputConfirmationDialogue},
    template: `<InputConfirmationDialogue />`
});