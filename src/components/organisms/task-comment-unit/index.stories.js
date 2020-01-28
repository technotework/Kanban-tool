
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import TaskCommentUnit from "./index.vue";

export default {
    title:"organisms/TaskCommentUnit",
    component: {TaskCommentUnit},
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components:{TaskCommentUnit,Theme},
    template: `<Theme><TaskCommentUnit /></Theme>`
});