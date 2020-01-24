
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ArchiveList from "./index.vue";

export default {
    title:"organisms/ArchiveList",
    component: {ArchiveList}
};

export const Basic = () => ({
    components:{ArchiveList,Theme},
    template: `<Theme><ArchiveList /></Theme>`
});