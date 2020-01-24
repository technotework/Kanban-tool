
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ArchiveListItem from "./index.vue";

export default {
    title:"organisms/ArchiveListItem",
    component: {ArchiveListItem}
};

export const Basic = () => ({
    components:{ArchiveListItem,Theme},
    template: `<Theme><ArchiveListItem /></Theme>`
});