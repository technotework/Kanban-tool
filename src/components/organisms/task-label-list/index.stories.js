
import TaskLabelList from "./index.vue";

export default {
    title:"organisms/TaskLabelList",
    component: {TaskLabelList}
};

export const Basic = () => ({
    components:{TaskLabelList},
    template: "<TaskLabelList />"
});