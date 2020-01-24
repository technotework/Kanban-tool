
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailLeft from "./index.vue";

export default {
    title:"templates/HolyGrailLeft",
    component: {HolyGrailLeft}
};

export const Basic = () => ({
    components:{HolyGrailLeft,Theme},
    template: `<Theme><HolyGrailLeft /></Theme>`
});