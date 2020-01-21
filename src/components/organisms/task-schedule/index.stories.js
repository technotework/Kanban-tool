
import TaskSchedule from "./index.vue";

export default {
    title:"organisms/TaskSchedule",
    component: {TaskSchedule}
};

export const Basic = () => ({
    components:{TaskSchedule},
    template: "<TaskSchedule />"
});