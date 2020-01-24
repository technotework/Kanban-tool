
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import LabelMasterPage from "./index.vue";

export default {
    title:"pages/LabelMasterPage",
    component: {LabelMasterPage}
};

export const Basic = () => ({
    components:{LabelMasterPage,Theme},
    template: `<Theme><LabelMasterPage /></Theme>`
});