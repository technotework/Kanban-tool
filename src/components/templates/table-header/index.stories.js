
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TableHeader from "./index.vue";

export default {
    title:"templates/TableHeader",
    component: {TableHeader}
};

export const Basic = () => ({
    components:{TableHeader,Theme},
    template: `<Theme><TableHeader /></Theme>`
});