
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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