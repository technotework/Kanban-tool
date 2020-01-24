
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskEditPage from "./index.vue";

export default {
    title:"pages/TaskEditPage",
    component: {TaskEditPage}
};

export const Basic = () => ({
    components:{TaskEditPage,Theme},
    template: `<Theme><TaskEditPage /></Theme>`
});