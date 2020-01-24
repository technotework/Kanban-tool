
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import LabelMasterListItem from "./index.vue";

export default {
    title:"organisms/LabelMasterListItem",
    component: {LabelMasterListItem}
};

export const Basic = () => ({
    components:{LabelMasterListItem,Theme},
    template: `<Theme><LabelMasterListItem /></Theme>`
});