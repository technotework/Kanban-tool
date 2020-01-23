
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import RegistPage from "./index.vue";

export default {
    title:"pages/RegistPage",
    component: {RegistPage}
};

export const Basic = () => ({
    components:{RegistPage},
    template: `<RegistPage />`
});