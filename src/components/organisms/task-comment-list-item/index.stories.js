
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TaskCommentListItem from "./index.vue";

export default {
    title:"organisms/TaskCommentListItem",
    component: {TaskCommentListItem}
};

export const Basic = () => ({
    components:{TaskCommentListItem},
    template: `<TaskCommentListItem />`
});