
import TaskPostForm from "./index.vue";

export default {
    title:"organisms/TaskPostForm",
    component: {TaskPostForm}
};

export const Basic = () => ({
    components:{TaskPostForm},
    template: "<TaskPostForm />"
});