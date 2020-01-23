
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import LabelMasterPostForm from "./index.vue";

export default {
    title:"organisms/LabelMasterPostForm",
    component: {LabelMasterPostForm}
};

export const Basic = () => ({
    components:{LabelMasterPostForm},
    template: `<LabelMasterPostForm />`
});