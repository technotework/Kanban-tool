
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import MemberMasterPage from "./index.vue";

export default {
    title:"pages/MemberMasterPage",
    component: {MemberMasterPage}
};

export const Basic = () => ({
    components:{MemberMasterPage},
    template: `<MemberMasterPage />`
});