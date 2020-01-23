
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import HolyGrailLayout from "./index.vue";

export default {
    title:"templates/HolyGrailLayout",
    component: {HolyGrailLayout}
};

export const Basic = () => ({
    components:{HolyGrailLayout},
    template: `<HolyGrailLayout />`
});