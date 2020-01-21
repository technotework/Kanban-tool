
import ProjectBoardListItem from "./index.vue";

export default {
    title:"organisms/ProjectBoardListItem",
    component: {ProjectBoardListItem}
};

export const Basic = () => ({
    components:{ProjectBoardListItem},
    template: "<ProjectBoardListItem />"
});