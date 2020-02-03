
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import ProjectList from "./index.vue";

export default {
    title: "organisms/ProjectList",
    component: { ProjectList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectList },
    template: `<ProjectList />`
});