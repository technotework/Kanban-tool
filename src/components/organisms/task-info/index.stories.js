
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskInfo from "./index.vue";

export default {
    title:"organisms/TaskInfo",
    component: {TaskInfo}
};

export const Basic = () => ({
    components:{TaskInfo,Theme},
    template: `<Theme><TaskInfo /></Theme>`
});