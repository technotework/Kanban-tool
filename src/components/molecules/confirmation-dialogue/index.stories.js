
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ConfirmationDialogue from "./index.vue";

export default {
    title:"molecules/ConfirmationDialogue",
    component: {ConfirmationDialogue}
};

export const Basic = () => ({
    components:{ConfirmationDialogue},
    template: `<ConfirmationDialogue />`
});