
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import TaskCommentListItem from "./index.vue";

export default {
    title: "organisms/TaskCommentListItem",
    component: { TaskCommentListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskCommentListItem },
    template: `<TaskCommentListItem />`
});