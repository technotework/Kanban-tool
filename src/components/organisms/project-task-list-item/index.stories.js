
import ProjectTaskListItem from "./index.vue";

export default {
    title:"organisms/ProjectTaskListItem",
    component: {ProjectTaskListItem}
};

export const Basic = () => ({
    components:{ProjectTaskListItem},
    template: "<ProjectTaskListItem />"
});