
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ProjectListItem from "./index.vue";

export default {
    title:"organisms/ProjectListItem",
    component: {ProjectListItem}
};

export const Basic = () => ({
    components:{ProjectListItem},
    template: `<ProjectListItem />`
});