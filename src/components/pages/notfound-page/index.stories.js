
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import NotfoundPage from "./index.vue";

export default {
    title:"pages/NotfoundPage",
    component: {NotfoundPage}
};

export const Basic = () => ({
    components:{NotfoundPage,Theme},
    template: `<Theme><NotfoundPage /></Theme>`
});