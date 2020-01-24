
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TableRow from "./index.vue";

export default {
    title:"templates/TableRow",
    component: {TableRow}
};

export const Basic = () => ({
    components:{TableRow,Theme},
    template: `<Theme><TableRow /></Theme>`
});