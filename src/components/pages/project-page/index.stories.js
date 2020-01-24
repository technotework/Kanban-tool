
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectPage from "./index.vue";

export default {
    title:"pages/ProjectPage",
    component: {ProjectPage}
};

export const Basic = () => ({
    components:{ProjectPage,Theme},
    template: `<Theme><ProjectPage /></Theme>`
});