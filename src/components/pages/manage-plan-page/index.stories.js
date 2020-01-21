
import ManagePlanPage from "./index.vue";

export default {
    title:"pages/ManagePlanPage",
    component: {ManagePlanPage}
};

export const Basic = () => ({
    components:{ManagePlanPage},
    template: "<ManagePlanPage />"
});