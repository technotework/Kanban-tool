
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ArchiveListItem from "./index.vue";

export default {
    title:"organisms/ArchiveListItem",
    component: {ArchiveListItem}
};

export const Basic = () => ({
    components:{ArchiveListItem},
    template: `<ArchiveListItem />`
});