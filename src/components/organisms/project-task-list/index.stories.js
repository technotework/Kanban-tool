
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import ProjectTaskList from "./index.vue";

export default {
    title: "organisms/ProjectTaskList",
    component: { ProjectTaskList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectTaskList },
    template: `<ProjectTaskList />`
});