
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import LoginForm from "./index.vue";

export default {
    title:"organisms/LoginForm",
    component: {LoginForm}
};

export const Basic = () => ({
    components:{LoginForm,Theme},
    template: `<Theme><LoginForm /></Theme>`
});