
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import MemberMasterListItem from "./index.vue";

export default {
    title:"organisms/MemberMasterListItem",
    component: {MemberMasterListItem}
};

export const Basic = () => ({
    components:{MemberMasterListItem,Theme},
    template: `<Theme><MemberMasterListItem /></Theme>`
});