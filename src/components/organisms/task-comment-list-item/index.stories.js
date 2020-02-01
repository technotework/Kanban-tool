
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { TaskCommentListItem, Theme },
    template: `<Theme><TaskCommentListItem /></Theme>`
});