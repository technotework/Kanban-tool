
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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