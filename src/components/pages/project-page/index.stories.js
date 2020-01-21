
import ProjectPage from "./index.vue";

export default {
    title:"pages/ProjectPage",
    component: {ProjectPage}
};

export const Basic = () => ({
    components:{ProjectPage},
    template: "<ProjectPage />"
});