
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import ArchiveListItem from "./index.vue";

export default {
    title: "organisms/ArchiveListItem",
    component: { ArchiveListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ArchiveListItem },
    template: `<ArchiveListItem />`
});