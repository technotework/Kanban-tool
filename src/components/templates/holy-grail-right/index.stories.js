
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import HolyGrailRight from "./index.vue";

export default {
    title:"templates/HolyGrailRight",
    component: {HolyGrailRight}
};

export const Basic = () => ({
    components:{HolyGrailRight},
    template: `<HolyGrailRight />`
});