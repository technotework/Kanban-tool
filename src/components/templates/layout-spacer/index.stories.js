
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import LayoutSpacer from "./index.vue";

export default {
    title:"templates/LayoutSpacer",
    component: {LayoutSpacer}
};

export const Basic = () => ({
    components:{LayoutSpacer},
    template: `<LayoutSpacer />`
});