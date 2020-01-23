
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TableCol from "./index.vue";

export default {
    title:"templates/TableCol",
    component: {TableCol}
};

export const Basic = () => ({
    components:{TableCol},
    template: `<TableCol />`
});