
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskSchedule from "./index.vue";

export default {
    title: "organisms/TaskSchedule",
    component: { TaskSchedule },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskSchedule, Theme },
    template: `<Theme><TaskSchedule /></Theme>`
});