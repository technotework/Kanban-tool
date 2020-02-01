
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskMemberListItem from "./index.vue";

export default {
    title: "organisms/TaskMemberListItem",
    component: { TaskMemberListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskMemberListItem },
    template: `<TaskMemberListItem />`
});