
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import MemberMasterPage from "./index.vue";

export default {
    title:"pages/MemberMasterPage",
    component: {MemberMasterPage}
};

export const Basic = () => ({
    components:{MemberMasterPage,Theme},
    template: `<Theme><MemberMasterPage /></Theme>`
});