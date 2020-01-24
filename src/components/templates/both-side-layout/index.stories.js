
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BothSideLayout from "./index.vue";

export default {
    title:"templates/BothSideLayout",
    component: {BothSideLayout}
};

export const Basic = () => ({
    components:{BothSideLayout,Theme},
    template: `<Theme><BothSideLayout /></Theme>`
});