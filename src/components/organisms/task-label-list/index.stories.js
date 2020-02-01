
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskLabelList from "./index.vue";

export default {
    title: "organisms/TaskLabelList",
    component: { TaskLabelList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskLabelList },
    template: `<TaskLabelList />`
});