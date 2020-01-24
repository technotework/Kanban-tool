
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import CompleteRegistTempPage from "./index.vue";

export default {
    title:"pages/CompleteRegistTempPage",
    component: {CompleteRegistTempPage}
};

export const Basic = () => ({
    components:{CompleteRegistTempPage,Theme},
    template: `<Theme><CompleteRegistTempPage /></Theme>`
});