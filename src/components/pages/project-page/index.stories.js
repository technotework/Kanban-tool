
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import ProjectPage from "./index.vue";

export default {
    title: "pages/ProjectPage",
    component: { ProjectPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectPage },
    template: `<ProjectPage />`
});