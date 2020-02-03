
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
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