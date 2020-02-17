import {
    createDefStory,
} from "@/components/utils/story-creator";
import {
    action, text
} from "@/components/utils/story-export"
import ProjectListItem from "./index.vue";

let description = 'import ProjectListItem from "@/components/organisms/projects/project-list-item/"';
export default createDefStory("organisms/projects/ProjectListItem", ProjectListItem, description);


//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectListItem
    },
    data: () => ({
        text: "ProjectName"
    }),
    props: {
        id: { default: text("id", "abcde") },
        date: { default: text("date", "1581915376") },
    },
    template: `<ProjectListItem v-bind="{date,id}" @edited-project-name="action" v-model.lazy="text" />`,
    methods: { action: action('edited-project-name') }
});
