import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import ProjectTaskListItem from "./index.vue";


let description = 'import ProjectTaskListItem from "@/components/organisms/project-task-list-item/"'
export default createDefStory("organisms/ProjectTaskListItem", ProjectTaskListItem, description);

//---------------------
//Basic


export const Basic = () => ({
    components: {
        ProjectTaskListItem
    },
    data: function () {
        return {
            myValue: "content",
        }
    },
    template: `<ProjectTaskListItem v-model.lazy="myValue" />`
});