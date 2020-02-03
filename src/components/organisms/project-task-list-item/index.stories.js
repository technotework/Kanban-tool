
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
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