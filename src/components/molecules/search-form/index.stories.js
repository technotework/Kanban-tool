
import SearchForm from "./index.vue";

export default {
    title:"molecules/SearchForm",
    component: {SearchForm}
};

export const Basic = () => ({
    components:{SearchForm},
    template: "<SearchForm />"
});