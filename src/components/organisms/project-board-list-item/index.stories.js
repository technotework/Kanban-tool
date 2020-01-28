
import  { global, action, Theme, styled, withKnobs, text, color, number, withInfo }  from "@/components/themes/story-export"
import ProjectBoardListItem from "./index.vue";

export default {
    title: "organisms/ProjectBoardListItem",
    component: { ProjectBoardListItem },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ProjectBoardListItem, Theme },
    template: `<Theme><ProjectBoardListItem /></Theme>`
});