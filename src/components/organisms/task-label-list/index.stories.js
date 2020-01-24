
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskLabelList from "./index.vue";

export default {
    title:"organisms/TaskLabelList",
    component: {TaskLabelList}
};

export const Basic = () => ({
    components:{TaskLabelList,Theme},
    template: `<Theme><TaskLabelList /></Theme>`
});