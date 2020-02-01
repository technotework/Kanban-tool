
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import TaskSchedule from "./index.vue";

export default {
    title: "organisms/TaskSchedule",
    component: { TaskSchedule },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskSchedule },
    template: `<TaskSchedule />`
});