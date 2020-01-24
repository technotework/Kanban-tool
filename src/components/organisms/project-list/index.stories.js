
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectList from "./index.vue";

export default {
    title:"organisms/ProjectList",
    component: {ProjectList}
};

export const Basic = () => ({
    components:{ProjectList,Theme},
    template: `<Theme><ProjectList /></Theme>`
});