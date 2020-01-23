
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import HolyGrailBottom from "./index.vue";

export default {
    title:"templates/HolyGrailBottom",
    component: {HolyGrailBottom}
};

export const Basic = () => ({
    components:{HolyGrailBottom},
    template: `<HolyGrailBottom />`
});