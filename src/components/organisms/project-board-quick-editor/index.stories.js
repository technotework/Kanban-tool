
import ProjectBoardQuickEditor from "./index.vue";

export default {
    title:"organisms/ProjectBoardQuickEditor",
    component: {ProjectBoardQuickEditor}
};

export const Basic = () => ({
    components:{ProjectBoardQuickEditor},
    template: "<ProjectBoardQuickEditor />"
});