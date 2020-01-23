
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ProjectTaskList from "./index.vue";

export default {
    title:"organisms/ProjectTaskList",
    component: {ProjectTaskList}
};

export const Basic = () => ({
    components:{ProjectTaskList},
    template: `<ProjectTaskList />`
});