
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BothSideLeft from "./index.vue";

export default {
    title:"templates/BothSideLeft",
    component: {BothSideLeft}
};

export const Basic = () => ({
    components:{BothSideLeft},
    template: `<BothSideLeft />`
});