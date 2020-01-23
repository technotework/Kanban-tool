
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import MemberMasterList from "./index.vue";

export default {
    title:"organisms/MemberMasterList",
    component: {MemberMasterList}
};

export const Basic = () => ({
    components:{MemberMasterList},
    template: `<MemberMasterList />`
});