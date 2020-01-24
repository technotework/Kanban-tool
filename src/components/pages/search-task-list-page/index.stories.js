
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import SearchTaskListPage from "./index.vue";

export default {
    title:"pages/SearchTaskListPage",
    component: {SearchTaskListPage}
};

export const Basic = () => ({
    components:{SearchTaskListPage,Theme},
    template: `<Theme><SearchTaskListPage /></Theme>`
});