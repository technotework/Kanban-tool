
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import LabelMasterList from "./index.vue";

export default {
    title:"organisms/LabelMasterList",
    component: {LabelMasterList}
};

export const Basic = () => ({
    components:{LabelMasterList},
    template: `<LabelMasterList />`
});