
import ProjectListPage from "./index.vue";

export default {
    title:"pages/ProjectListPage",
    component: {ProjectListPage}
};

export const Basic = () => ({
    components:{ProjectListPage},
    template: "<ProjectListPage />"
});