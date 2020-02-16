import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import {
    action
} from "@/components/utils/story-export"
import ProjectListItem from "./index.vue";

let description = 'import ProjectListItem from "@/components/organisms/projects/project-list-item/"';
export default createDefStory("organisms/projects/ProjectListItem", ProjectListItem, description);

let setting = {
    name: "ProjectListItem",
    compos: {
        ProjectListItem: ProjectListItem
    },
    props: {
        id: "p1",
        name: "myProjectName",
        date: "1580964954",
    },
    action: {
        event: "context-menu-click"
    },
    template: tagTemp `<ProjectListItem ${"props"} ${"action"} />`
};

export const Basic = () => createStory(setting);