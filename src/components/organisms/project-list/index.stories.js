
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ProjectList from "./index.vue";

export default {
    title:"organisms/ProjectList",
    component: {ProjectList}
};

export const Basic = () => ({
    components:{ProjectList},
    template: `<ProjectList />`
});