
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TaskMemberListItem from "./index.vue";

export default {
    title:"organisms/TaskMemberListItem",
    component: {TaskMemberListItem}
};

export const Basic = () => ({
    components:{TaskMemberListItem},
    template: `<TaskMemberListItem />`
});