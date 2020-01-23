
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TaskMemberList from "./index.vue";

export default {
    title:"organisms/TaskMemberList",
    component: {TaskMemberList}
};

export const Basic = () => ({
    components:{TaskMemberList},
    template: `<TaskMemberList />`
});