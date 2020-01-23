
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ContextMenuListItem from "./index.vue";

export default {
    title:"molecules/ContextMenuListItem",
    component: {ContextMenuListItem}
};

export const Basic = () => ({
    components:{ContextMenuListItem},
    template: `<ContextMenuListItem />`
});