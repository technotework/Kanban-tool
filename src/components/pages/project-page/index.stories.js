
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ProjectPage from "./index.vue";

export default {
    title:"pages/ProjectPage",
    component: {ProjectPage}
};

export const Basic = () => ({
    components:{ProjectPage},
    template: `<ProjectPage />`
});