
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import HolyGrailMain from "./index.vue";

export default {
    title:"templates/HolyGrailMain",
    component: {HolyGrailMain}
};

export const Basic = () => ({
    components:{HolyGrailMain,Theme},
    template: `<Theme><HolyGrailMain /></Theme>`
});