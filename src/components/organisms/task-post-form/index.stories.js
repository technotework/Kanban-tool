
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import TaskPostForm from "./index.vue";

export default {
    title: "organisms/TaskPostForm",
    component: { TaskPostForm },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { TaskPostForm, Theme },
    template: `<Theme><TaskPostForm /></Theme>`
});