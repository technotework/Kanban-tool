
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import TaskCommentList from "./index.vue";

export default {
    title: "organisms/TaskCommentList",
    component: { TaskCommentList },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskCommentList, Theme },
    template: `<Theme><TaskCommentList /></Theme>`
});