
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import ProjectListItem from "./index.vue";

export default {
    title: "organisms/ProjectListItem",
    component: { ProjectListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectListItem },
    template: `<ProjectListItem />`
});