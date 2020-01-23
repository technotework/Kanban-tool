
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TaskLabelList from "./index.vue";

export default {
    title:"organisms/TaskLabelList",
    component: {TaskLabelList}
};

export const Basic = () => ({
    components:{TaskLabelList},
    template: `<TaskLabelList />`
});