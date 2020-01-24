
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectListItem from "./index.vue";

export default {
    title:"organisms/ProjectListItem",
    component: {ProjectListItem}
};

export const Basic = () => ({
    components:{ProjectListItem,Theme},
    template: `<Theme><ProjectListItem /></Theme>`
});