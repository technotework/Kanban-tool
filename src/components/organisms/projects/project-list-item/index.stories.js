import { createDefStory } from "@/components/utils/story-creator";
import { action } from "@/components/utils/story-export";
import ProjectListItem from "./index.vue";

const description =
    'import ProjectListItem from "@/components/organisms/projects/project-list-item/"';
export default createDefStory(
    "organisms/projects/ProjectListItem",
    ProjectListItem,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectListItem
    },
    data: () => ({
        item: {
            project: {
                id: "a",
                label: "project",
                update_date: "1583492128"
            }
        }
    }),
    props: {},
    template: `<ProjectListItem
    :id="item.project.id"
    v-model="item.project.label"
    :date="item.project.update_date"
    @context-menu-click="onMenuClick"
    @edited-project-name="onInput"
  />`,
    methods: {
        onMenuClick: action("context-menu-click"),
        onInput: action("edited-project-name")
    }
});
