
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import LabelMasterListItem from "./index.vue";

export default {
    title:"organisms/LabelMasterListItem",
    component: {LabelMasterListItem}
};

export const Basic = () => ({
    components:{LabelMasterListItem},
    template: `<LabelMasterListItem />`
});