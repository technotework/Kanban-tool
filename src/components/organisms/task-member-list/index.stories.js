
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskMemberList from "./index.vue";

export default {
    title:"organisms/TaskMemberList",
    component: {TaskMemberList}
};

export const Basic = () => ({
    components:{TaskMemberList,Theme},
    template: `<Theme><TaskMemberList /></Theme>`
});