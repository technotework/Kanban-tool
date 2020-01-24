
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ArchiveTaskListPage from "./index.vue";

export default {
    title:"pages/ArchiveTaskListPage",
    component: {ArchiveTaskListPage}
};

export const Basic = () => ({
    components:{ArchiveTaskListPage,Theme},
    template: `<Theme><ArchiveTaskListPage /></Theme>`
});