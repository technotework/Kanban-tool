
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import MemberMasterListItem from "./index.vue";

export default {
    title:"organisms/MemberMasterListItem",
    component: {MemberMasterListItem}
};

export const Basic = () => ({
    components:{MemberMasterListItem},
    template: `<MemberMasterListItem />`
});