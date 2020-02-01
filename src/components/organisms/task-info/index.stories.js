
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskInfo from "./index.vue";

export default {
    title: "organisms/TaskInfo",
    component: { TaskInfo },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskInfo },
    template: `<TaskInfo />`
});