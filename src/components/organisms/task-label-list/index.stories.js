
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import TaskLabelList from "./index.vue";

export default {
    title: "organisms/TaskLabelList",
    component: { TaskLabelList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskLabelList, Theme },
    template: `<Theme><TaskLabelList /></Theme>`
});