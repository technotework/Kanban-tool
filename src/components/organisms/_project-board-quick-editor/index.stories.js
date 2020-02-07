
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import ProjectBoardQuickEditor from "./index.vue";

export default {
    title: "organisms/ProjectBoardQuickEditor",
    component: { ProjectBoardQuickEditor },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectBoardQuickEditor },
    template: `<ProjectBoardQuickEditor />`
});