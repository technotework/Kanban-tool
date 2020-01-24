
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectBoardListItem from "./index.vue";

export default {
    title:"organisms/ProjectBoardListItem",
    component: {ProjectBoardListItem}
};

export const Basic = () => ({
    components:{ProjectBoardListItem,Theme},
    template: `<Theme><ProjectBoardListItem /></Theme>`
});