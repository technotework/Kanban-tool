import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import ProjectTaskListItem from "./index.vue";


let description = 'import ProjectTaskListItem from "@/components/organisms/boards/project-task-list-item/"'
export default createDefStory("organisms/boards/ProjectTaskListItem", ProjectTaskListItem, description);

//---------------------
//Basic

export const Basic = () => ({
    components: {
        ProjectTaskListItem
    },
    data: function () {
        return {
            taskContent: "content",
        }
    },
    template: `<ProjectTaskListItem v-model.lazy="taskContent" />`
});