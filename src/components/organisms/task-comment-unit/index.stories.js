
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskCommentUnit from "./index.vue";

export default {
    title: "organisms/TaskCommentUnit",
    component: { TaskCommentUnit },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskCommentUnit },
    template: `<TaskCommentUnit />`
});