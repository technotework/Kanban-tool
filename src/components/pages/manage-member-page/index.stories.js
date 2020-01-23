
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ManageMemberPage from "./index.vue";

export default {
    title:"pages/ManageMemberPage",
    component: {ManageMemberPage}
};

export const Basic = () => ({
    components:{ManageMemberPage},
    template: `<ManageMemberPage />`
});