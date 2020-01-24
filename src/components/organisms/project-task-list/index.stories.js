
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectTaskList from "./index.vue";

export default {
    title:"organisms/ProjectTaskList",
    component: {ProjectTaskList}
};

export const Basic = () => ({
    components:{ProjectTaskList,Theme},
    template: `<Theme><ProjectTaskList /></Theme>`
});