
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ManagePlanPage from "./index.vue";

export default {
    title:"pages/ManagePlanPage",
    component: {ManagePlanPage}
};

export const Basic = () => ({
    components:{ManagePlanPage,Theme},
    template: `<Theme><ManagePlanPage /></Theme>`
});