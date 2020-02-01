
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import SearchList from "./index.vue";

export default {
    title: "organisms/SearchList",
    component: { SearchList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { SearchList },
    template: `<SearchList />`
});