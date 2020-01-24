
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import LayoutSpacer from "./index.vue";

export default {
    title:"templates/LayoutSpacer",
    component: {LayoutSpacer}
};

export const Basic = () => ({
    components:{LayoutSpacer,Theme},
    template: `<Theme><LayoutSpacer /></Theme>`
});