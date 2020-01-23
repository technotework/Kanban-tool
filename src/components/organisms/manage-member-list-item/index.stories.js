
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ManageMemberListItem from "./index.vue";

export default {
    title:"organisms/ManageMemberListItem",
    component: {ManageMemberListItem}
};

export const Basic = () => ({
    components:{ManageMemberListItem},
    template: `<ManageMemberListItem />`
});