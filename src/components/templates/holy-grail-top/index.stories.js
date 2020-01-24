
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailTop from "./index.vue";

export default {
    title:"templates/HolyGrailTop",
    component: {HolyGrailTop}
};

export const Basic = () => ({
    components:{HolyGrailTop,Theme},
    template: `<Theme><HolyGrailTop /></Theme>`
});