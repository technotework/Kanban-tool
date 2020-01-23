
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ProjectBoardQuickEditor from "./index.vue";

export default {
    title:"organisms/ProjectBoardQuickEditor",
    component: {ProjectBoardQuickEditor}
};

export const Basic = () => ({
    components:{ProjectBoardQuickEditor},
    template: `<ProjectBoardQuickEditor />`
});