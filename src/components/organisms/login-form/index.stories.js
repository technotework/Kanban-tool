
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import LoginForm from "./index.vue";

export default {
    title:"organisms/LoginForm",
    component: {LoginForm}
};

export const Basic = () => ({
    components:{LoginForm},
    template: `<LoginForm />`
});