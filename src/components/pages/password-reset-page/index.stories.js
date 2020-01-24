
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import PasswordResetPage from "./index.vue";

export default {
    title:"pages/PasswordResetPage",
    component: {PasswordResetPage}
};

export const Basic = () => ({
    components:{PasswordResetPage,Theme},
    template: `<Theme><PasswordResetPage /></Theme>`
});