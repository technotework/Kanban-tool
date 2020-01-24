
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import CalenderEditPage from "./index.vue";

export default {
    title:"pages/CalenderEditPage",
    component: {CalenderEditPage}
};

export const Basic = () => ({
    components:{CalenderEditPage,Theme},
    template: `<Theme><CalenderEditPage /></Theme>`
});