
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import InputConfirmationDialogue from "./index.vue";

export default {
    title:"molecules/InputConfirmationDialogue",
    component: {InputConfirmationDialogue}
};

export const Basic = () => ({
    components:{InputConfirmationDialogue,Theme},
    template: `<Theme><InputConfirmationDialogue /></Theme>`
});