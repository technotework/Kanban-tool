
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import PasswordReissuePage from "./index.vue";

export default {
    title:"pages/PasswordReissuePage",
    component: {PasswordReissuePage}
};

export const Basic = () => ({
    components:{PasswordReissuePage,Theme},
    template: `<Theme><PasswordReissuePage /></Theme>`
});