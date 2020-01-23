
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import LoginPage from "./index.vue";

export default {
    title:"pages/LoginPage",
    component: {LoginPage}
};

export const Basic = () => ({
    components:{LoginPage},
    template: `<LoginPage />`
});