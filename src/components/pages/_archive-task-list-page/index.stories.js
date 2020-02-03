
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import ArchiveTaskListPage from "./index.vue";

export default {
    title: "pages/ArchiveTaskListPage",
    component: { ArchiveTaskListPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ArchiveTaskListPage },
    template: `<ArchiveTaskListPage />`
});