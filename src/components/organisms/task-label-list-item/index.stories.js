
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import TaskLabelListItem from "./index.vue";

export default {
    title: "organisms/TaskLabelListItem",
    component: { TaskLabelListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskLabelListItem, Theme },
    template: `<Theme><TaskLabelListItem /></Theme>`
});