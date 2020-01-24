
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import SearchForm from "./index.vue";

export default {
    title:"molecules/SearchForm",
    component: {SearchForm}
};

export const Basic = () => ({
    components:{SearchForm,Theme},
    template: `<Theme><SearchForm /></Theme>`
});