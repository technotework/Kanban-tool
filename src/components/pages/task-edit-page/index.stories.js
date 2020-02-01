
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskEditPage from "./index.vue";

export default {
    title: "pages/TaskEditPage",
    component: { TaskEditPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskEditPage, Theme },
    template: `<Theme><TaskEditPage /></Theme>`
});