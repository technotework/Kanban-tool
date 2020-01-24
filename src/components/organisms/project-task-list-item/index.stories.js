
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectTaskListItem from "./index.vue";

export default {
    title:"organisms/ProjectTaskListItem",
    component: {ProjectTaskListItem}
};

export const Basic = () => ({
    components:{ProjectTaskListItem,Theme},
    template: `<Theme><ProjectTaskListItem /></Theme>`
});