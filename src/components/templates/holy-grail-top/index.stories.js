
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import HolyGrailTop from "./index.vue";

export default {
    title:"templates/HolyGrailTop",
    component: {HolyGrailTop}
};

export const Basic = () => ({
    components:{HolyGrailTop},
    template: `<HolyGrailTop />`
});