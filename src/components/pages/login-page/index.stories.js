
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import LoginPage from "./index.vue";

export default {
    title:"pages/LoginPage",
    component: {LoginPage}
};

export const Basic = () => ({
    components:{LoginPage,Theme},
    template: `<Theme><LoginPage /></Theme>`
});