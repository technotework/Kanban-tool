
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import CalenderEditPage from "./index.vue";

export default {
    title:"pages/CalenderEditPage",
    component: {CalenderEditPage}
};

export const Basic = () => ({
    components:{CalenderEditPage},
    template: `<CalenderEditPage />`
});