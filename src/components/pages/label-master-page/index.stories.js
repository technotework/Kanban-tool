
import LabelMasterPage from "./index.vue";

export default {
    title:"pages/LabelMasterPage",
    component: {LabelMasterPage}
};

export const Basic = () => ({
    components:{LabelMasterPage},
    template: "<LabelMasterPage />"
});