
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { ArchiveListItem, Theme },
    template: `<Theme><ArchiveListItem /></Theme>`
});