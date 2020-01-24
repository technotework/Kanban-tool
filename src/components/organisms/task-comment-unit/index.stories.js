
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskCommentUnit from "./index.vue";

export default {
    title:"organisms/TaskCommentUnit",
    component: {TaskCommentUnit}
};

export const Basic = () => ({
    components:{TaskCommentUnit,Theme},
    template: `<Theme><TaskCommentUnit /></Theme>`
});