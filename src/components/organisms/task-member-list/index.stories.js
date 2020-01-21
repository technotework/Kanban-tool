
import TaskMemberList from "./index.vue";

export default {
    title:"organisms/TaskMemberList",
    component: {TaskMemberList}
};

export const Basic = () => ({
    components:{TaskMemberList},
    template: "<TaskMemberList />"
});