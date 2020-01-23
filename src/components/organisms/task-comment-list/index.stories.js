
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TaskCommentList from "./index.vue";

export default {
    title:"organisms/TaskCommentList",
    component: {TaskCommentList}
};

export const Basic = () => ({
    components:{TaskCommentList},
    template: `<TaskCommentList />`
});