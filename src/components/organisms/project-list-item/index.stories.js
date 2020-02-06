import {
    createDefStory,
    createStory,
    tagTemp
} from "@/components/utils/story-creator";
import {
    action
} from "@/components/utils/story-export"
import ProjectListItem from "./index.vue";

let description = 'import ProjectListItem from "@/components/organisms/project-list-item/"';
export default createDefStory("organisms/ProjectListItem", ProjectListItem, description);

let setting = {
    name: "ProjectListItem",
    compos: {
        ProjectListItem: ProjectListItem
    },
    props: {},
    template: tagTemp `<ProjectListItem />`
};

export const Basic = () => createStory(setting);