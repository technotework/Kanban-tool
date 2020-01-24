
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import CompleteRegistPage from "./index.vue";

export default {
    title:"pages/CompleteRegistPage",
    component: {CompleteRegistPage}
};

export const Basic = () => ({
    components:{CompleteRegistPage,Theme},
    template: `<Theme><CompleteRegistPage /></Theme>`
});