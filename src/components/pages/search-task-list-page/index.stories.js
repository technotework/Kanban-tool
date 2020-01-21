
import SearchTaskListPage from "./index.vue";

export default {
    title:"pages/SearchTaskListPage",
    component: {SearchTaskListPage}
};

export const Basic = () => ({
    components:{SearchTaskListPage},
    template: "<SearchTaskListPage />"
});