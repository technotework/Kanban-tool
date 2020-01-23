
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ArchiveTaskListPage from "./index.vue";

export default {
    title:"pages/ArchiveTaskListPage",
    component: {ArchiveTaskListPage}
};

export const Basic = () => ({
    components:{ArchiveTaskListPage},
    template: `<ArchiveTaskListPage />`
});