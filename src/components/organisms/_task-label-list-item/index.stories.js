
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import TaskLabelListItem from "./index.vue";

export default {
    title: "organisms/TaskLabelListItem",
    component: { TaskLabelListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskLabelListItem },
    template: `<TaskLabelListItem />`
});