
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import HolyGrailMain from "./index.vue";

export default {
    title:"templates/HolyGrailMain",
    component: {HolyGrailMain}
};

export const Basic = () => ({
    components:{HolyGrailMain},
    template: `<HolyGrailMain />`
});