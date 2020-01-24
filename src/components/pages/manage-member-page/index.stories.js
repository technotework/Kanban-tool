
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ManageMemberPage from "./index.vue";

export default {
    title:"pages/ManageMemberPage",
    component: {ManageMemberPage}
};

export const Basic = () => ({
    components:{ManageMemberPage,Theme},
    template: `<Theme><ManageMemberPage /></Theme>`
});