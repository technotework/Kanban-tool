
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import RegistForm from "./index.vue";

export default {
    title:"organisms/RegistForm",
    component: {RegistForm}
};

export const Basic = () => ({
    components:{RegistForm,Theme},
    template: `<Theme><RegistForm /></Theme>`
});