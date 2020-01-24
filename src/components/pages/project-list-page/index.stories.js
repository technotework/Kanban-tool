
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectListPage from "./index.vue";

export default {
    title:"pages/ProjectListPage",
    component: {ProjectListPage}
};

export const Basic = () => ({
    components:{ProjectListPage,Theme},
    template: `<Theme><ProjectListPage /></Theme>`
});