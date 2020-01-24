
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import FlexLayout from "./index.vue";

export default {
    title:"templates/FlexLayout",
    component: {FlexLayout}
};

export const Basic = () => ({
    components:{FlexLayout,Theme},
    template: `<Theme><FlexLayout /></Theme>`
});