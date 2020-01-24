
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailLayout from "./index.vue";

export default {
    title:"templates/HolyGrailLayout",
    component: {HolyGrailLayout}
};

export const Basic = () => ({
    components:{HolyGrailLayout,Theme},
    template: `<Theme><HolyGrailLayout /></Theme>`
});