
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import ManagePlanPage from "./index.vue";

export default {
    title: "pages/ManagePlanPage",
    component: { ManagePlanPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ManagePlanPage },
    template: `<ManagePlanPage />`
});