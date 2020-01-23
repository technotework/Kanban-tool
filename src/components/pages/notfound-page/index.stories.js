
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import NotfoundPage from "./index.vue";

export default {
    title:"pages/NotfoundPage",
    component: {NotfoundPage}
};

export const Basic = () => ({
    components:{NotfoundPage},
    template: `<NotfoundPage />`
});