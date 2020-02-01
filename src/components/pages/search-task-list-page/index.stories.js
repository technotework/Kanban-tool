
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import SearchTaskListPage from "./index.vue";

export default {
    title: "pages/SearchTaskListPage",
    component: { SearchTaskListPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { SearchTaskListPage, Theme },
    template: `<Theme><SearchTaskListPage /></Theme>`
});