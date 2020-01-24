
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ProjectBoardList from "./index.vue";

export default {
    title:"organisms/ProjectBoardList",
    component: {ProjectBoardList}
};

export const Basic = () => ({
    components:{ProjectBoardList,Theme},
    template: `<Theme><ProjectBoardList /></Theme>`
});