
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BothSideLayout from "./index.vue";

export default {
    title:"templates/BothSideLayout",
    component: {BothSideLayout}
};

export const Basic = () => ({
    components:{BothSideLayout},
    template: `<BothSideLayout />`
});