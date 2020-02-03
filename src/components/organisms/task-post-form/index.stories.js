
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import TaskPostForm from "./index.vue";

export default {
    title: "organisms/TaskPostForm",
    component: { TaskPostForm },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskPostForm },
    template: `<TaskPostForm />`
});