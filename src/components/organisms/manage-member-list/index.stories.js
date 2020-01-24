
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ManageMemberList from "./index.vue";

export default {
    title:"organisms/ManageMemberList",
    component: {ManageMemberList}
};

export const Basic = () => ({
    components:{ManageMemberList,Theme},
    template: `<Theme><ManageMemberList /></Theme>`
});