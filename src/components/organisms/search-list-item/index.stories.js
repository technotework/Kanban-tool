
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import SearchListItem from "./index.vue";

export default {
    title: "organisms/SearchListItem",
    component: { SearchListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { SearchListItem },
    template: `<SearchListItem />`
});