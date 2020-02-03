
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import ProjectBoardListItem from "./index.vue";

export default {
    title: "organisms/ProjectBoardListItem",
    component: { ProjectBoardListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectBoardListItem },
    template: `<ProjectBoardListItem />`
});