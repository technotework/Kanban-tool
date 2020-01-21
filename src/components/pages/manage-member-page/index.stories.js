
import ManageMemberPage from "./index.vue";

export default {
    title:"pages/ManageMemberPage",
    component: {ManageMemberPage}
};

export const Basic = () => ({
    components:{ManageMemberPage},
    template: "<ManageMemberPage />"
});