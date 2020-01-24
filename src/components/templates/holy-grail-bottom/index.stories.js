
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailBottom from "./index.vue";

export default {
    title:"templates/HolyGrailBottom",
    component: {HolyGrailBottom}
};

export const Basic = () => ({
    components:{HolyGrailBottom,Theme},
    template: `<Theme><HolyGrailBottom /></Theme>`
});