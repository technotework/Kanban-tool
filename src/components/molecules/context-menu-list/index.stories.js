
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ContextMenuList from "./index.vue";

export default {
    title:"molecules/ContextMenuList",
    component: {ContextMenuList}
};

export const Basic = () => ({
    components:{ContextMenuList,Theme},
    template: `<Theme><ContextMenuList /></Theme>`
});