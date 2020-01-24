
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ManageMemberListItem from "./index.vue";

export default {
    title:"organisms/ManageMemberListItem",
    component: {ManageMemberListItem}
};

export const Basic = () => ({
    components:{ManageMemberListItem,Theme},
    template: `<Theme><ManageMemberListItem /></Theme>`
});