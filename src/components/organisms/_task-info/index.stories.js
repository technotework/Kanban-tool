
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
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