
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import ProjectTaskListItem from "./index.vue";

export default {
    title: "organisms/ProjectTaskListItem",
    component: { ProjectTaskListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectTaskListItem },
    template: `<ProjectTaskListItem />`
});