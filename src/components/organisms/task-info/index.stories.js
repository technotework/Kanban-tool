
import TaskInfo from "./index.vue";

export default {
    title:"organisms/TaskInfo",
    component: {TaskInfo}
};

export const Basic = () => ({
    components:{TaskInfo},
    template: "<TaskInfo />"
});