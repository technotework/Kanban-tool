
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import ProjectListPage from "./index.vue";

export default {
    title: "pages/ProjectListPage",
    component: { ProjectListPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectListPage, Theme },
    template: `<Theme><ProjectListPage /></Theme>`
});