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
let setting = {
    name: "ProjectTaskListItem",
    compos: {
        ProjectTaskListItem: ProjectTaskListItem
    },
    props: {
        id: "t1",
        title: "view実装：ProjectItem",
    },
    action: {
        event: "click-task-edit"
    },
    template: tagTemp `<ProjectTaskListItem ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));