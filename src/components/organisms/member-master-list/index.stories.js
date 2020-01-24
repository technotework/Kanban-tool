
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import MemberMasterList from "./index.vue";

export default {
    title:"organisms/MemberMasterList",
    component: {MemberMasterList}
};

export const Basic = () => ({
    components:{MemberMasterList,Theme},
    template: `<Theme><MemberMasterList /></Theme>`
});