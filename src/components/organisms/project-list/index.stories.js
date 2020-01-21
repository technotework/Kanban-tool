
import ProjectList from "./index.vue";

export default {
    title:"organisms/ProjectList",
    component: {ProjectList}
};

export const Basic = () => ({
    components:{ProjectList},
    template: "<ProjectList />"
});