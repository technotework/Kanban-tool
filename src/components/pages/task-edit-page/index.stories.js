
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import TaskEditPage from "./index.vue";

export default {
    title: "pages/TaskEditPage",
    component: { TaskEditPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskEditPage },
    template: `<TaskEditPage />`
});