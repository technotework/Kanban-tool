import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import TaskListItem from "./index.vue";


let description = 'import TaskListItem from "@/components/organisms/boards/task-list-item/"'
export default createDefStory("organisms/boards/TaskListItem", TaskListItem, description);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        TaskListItem
    },
    data: function () {
        return {
            taskContent: "content",
        }
    },
    template: `<TaskListItem v-model.lazy="taskContent" />`
});