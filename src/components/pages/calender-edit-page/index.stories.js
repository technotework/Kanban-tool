
import CalenderEditPage from "./index.vue";

export default {
    title:"pages/CalenderEditPage",
    component: {CalenderEditPage}
};

export const Basic = () => ({
    components:{CalenderEditPage},
    template: "<CalenderEditPage />"
});