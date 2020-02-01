
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import ArchiveList from "./index.vue";

export default {
    title: "organisms/ArchiveList",
    component: { ArchiveList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ArchiveList, Theme },
    template: `<Theme><ArchiveList /></Theme>`
});