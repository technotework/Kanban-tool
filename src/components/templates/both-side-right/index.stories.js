
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BothSideRight from "./index.vue";

export default {
    title:"templates/BothSideRight",
    component: {BothSideRight}
};

export const Basic = () => ({
    components:{BothSideRight},
    template: `<BothSideRight />`
});