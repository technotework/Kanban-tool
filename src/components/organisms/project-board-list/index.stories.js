
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import ProjectBoardList from "./index.vue";

export default {
    title: "organisms/ProjectBoardList",
    component: { ProjectBoardList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectBoardList },
    template: `<ProjectBoardList />`
});