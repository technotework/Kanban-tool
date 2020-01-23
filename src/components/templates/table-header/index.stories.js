
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import TableHeader from "./index.vue";

export default {
    title:"templates/TableHeader",
    component: {TableHeader}
};

export const Basic = () => ({
    components:{TableHeader},
    template: `<TableHeader />`
});