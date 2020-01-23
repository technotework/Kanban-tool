
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import CompleteRegistTempPage from "./index.vue";

export default {
    title:"pages/CompleteRegistTempPage",
    component: {CompleteRegistTempPage}
};

export const Basic = () => ({
    components:{CompleteRegistTempPage},
    template: `<CompleteRegistTempPage />`
});