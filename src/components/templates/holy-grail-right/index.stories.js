
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailRight from "./index.vue";

export default {
    title:"templates/HolyGrailRight",
    component: {HolyGrailRight}
};

export const Basic = () => ({
    components:{HolyGrailRight,Theme},
    template: `<Theme><HolyGrailRight /></Theme>`
});