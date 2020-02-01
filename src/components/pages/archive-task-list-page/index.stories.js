
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { ArchiveTaskListPage, Theme },
    template: `<Theme><ArchiveTaskListPage /></Theme>`
});