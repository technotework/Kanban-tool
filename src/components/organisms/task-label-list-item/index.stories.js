
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskLabelListItem from "./index.vue";

export default {
    title:"organisms/TaskLabelListItem",
    component: {TaskLabelListItem}
};

export const Basic = () => ({
    components:{TaskLabelListItem,Theme},
    template: `<Theme><TaskLabelListItem /></Theme>`
});