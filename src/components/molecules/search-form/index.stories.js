
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import SearchForm from "./index.vue";

export default {
    title:"molecules/SearchForm",
    component: {SearchForm}
};

export const Basic = () => ({
    components:{SearchForm},
    template: `<SearchForm />`
});