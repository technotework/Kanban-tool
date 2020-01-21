
import TaskEditPage from "./index.vue";

export default {
    title:"pages/TaskEditPage",
    component: {TaskEditPage}
};

export const Basic = () => ({
    components:{TaskEditPage},
    template: "<TaskEditPage />"
});