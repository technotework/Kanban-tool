
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import RegistPage from "./index.vue";

export default {
    title:"pages/RegistPage",
    component: {RegistPage}
};

export const Basic = () => ({
    components:{RegistPage,Theme},
    template: `<Theme><RegistPage /></Theme>`
});