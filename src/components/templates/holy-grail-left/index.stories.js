
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import HolyGrailLeft from "./index.vue";

export default {
    title:"templates/HolyGrailLeft",
    component: {HolyGrailLeft}
};

export const Basic = () => ({
    components:{HolyGrailLeft},
    template: `<HolyGrailLeft />`
});