
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import FlexLayout from "./index.vue";

export default {
    title:"templates/FlexLayout",
    component: {FlexLayout}
};

export const Basic = () => ({
    components:{FlexLayout},
    template: `<FlexLayout />`
});